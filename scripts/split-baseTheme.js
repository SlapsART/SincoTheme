const fs = require('fs');
const path = require('path');

const SOURCE_FILE = './source/base/baseTheme.ts';
const OUTPUT_DIR = './baseTheme';
const MAX_SIZE = 10 * 1024; // 10KB

function getSize(content) {
  return Buffer.byteLength(content, 'utf8');
}

function extractSections(content) {
  const sections = {
    imports: '',
    typography: '',
    palette: '',
    shadows: '',
    components: {},
    exports: ''
  };

  // Extraer imports
  const importsMatch = content.match(/^(import[\s\S]*?;)\n/m);
  if (importsMatch) {
    sections.imports = importsMatch[1];
  }

  // Extraer typography
  const typographyMatch = content.match(/typography:\s*{([\s\S]*?)}\s*,/);
  if (typographyMatch) {
    sections.typography = `typography: {${typographyMatch[1]}},`;
  }

  // Extraer palette
  const paletteMatch = content.match(/palette:\s*{([\s\S]*?)}\s*,/);
  if (paletteMatch) {
    sections.palette = `palette: {${paletteMatch[1]}},`;
  }

  // Extraer shadows
  const shadowsMatch = content.match(/shadows:\s*\[([\s\S]*?)\]\s*,/);
  if (shadowsMatch) {
    sections.shadows = `shadows: [${shadowsMatch[1]}],`;
  }

  // Extraer components
  const componentsMatch = content.match(/components:\s*{([\s\S]*?)}\s*,/);
  if (componentsMatch) {
    const componentsContent = componentsMatch[1];
    
    // Dividir por componente MUI
    const componentRegex = /(Mui[A-Z][a-zA-Z]*?):\s*{([\s\S]*?)}\s*,/g;
    let match;
    
    while ((match = componentRegex.exec(componentsContent)) !== null) {
      const componentName = match[1];
      const componentContent = match[2];
      sections.components[componentName] = `${componentName}: {${componentContent}},`;
    }
  }

  return sections;
}

// Ejecutar
console.log('🔧 Dividiendo baseTheme.ts...\n');

// Verificar que existe el archivo fuente
if (!fs.existsSync(SOURCE_FILE)) {
  console.error(`❌ Error: No se encontró ${SOURCE_FILE}`);
  process.exit(1);
}

const content = fs.readFileSync(SOURCE_FILE, 'utf8');
const sections = extractSections(content);

// Crear estructura de directorios
['Typography', 'Palette', 'Shadows', 'Components'].forEach(dir => {
  const dirPath = path.join(OUTPUT_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Guardar Typography
if (sections.typography) {
  const typographyContent = `${sections.imports}\n\nexport const typography = ${sections.typography}`;
  const filePath = path.join(OUTPUT_DIR, 'Typography', 'typography.ts');
  fs.writeFileSync(filePath, typographyContent);
  console.log(`✅ Typography/typography.ts (${getSize(typographyContent)} bytes)`);
}

// Guardar Palette
if (sections.palette) {
  const paletteContent = `${sections.imports}\n\nexport const palette = ${sections.palette}`;
  const filePath = path.join(OUTPUT_DIR, 'Palette', 'palette.ts');
  fs.writeFileSync(filePath, paletteContent);
  console.log(`✅ Palette/palette.ts (${getSize(paletteContent)} bytes)`);
}

// Guardar Shadows
if (sections.shadows) {
  const shadowsContent = `export const shadows = ${sections.shadows}`;
  const filePath = path.join(OUTPUT_DIR, 'Shadows', 'shadows.ts');
  fs.writeFileSync(filePath, shadowsContent);
  console.log(`✅ Shadows/shadows.ts (${getSize(shadowsContent)} bytes)`);
}

// Guardar Components
for (const [componentName, componentContent] of Object.entries(sections.components)) {
  const content = `${sections.imports}\n\nexport const ${componentName} = ${componentContent}`;
  const filePath = path.join(OUTPUT_DIR, 'Components', `${componentName}.ts`);
  
  const fileSize = getSize(content);
  
  if (fileSize <= MAX_SIZE) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Components/${componentName}.ts (${fileSize} bytes)`);
  } else {
    console.warn(`⚠️  ${componentName}.ts excede 10KB (${fileSize} bytes) - considerar dividir manualmente`);
    fs.writeFileSync(filePath, content);
  }
}

// Crear index.ts para re-exportar todo
const indexContent = `
export { typography } from './Typography/typography';
export { palette } from './Palette/palette';
export { shadows } from './Shadows/shadows';

// Components
${Object.keys(sections.components).map(name => 
  `export { ${name} } from './Components/${name}';`
).join('\n')}
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent.trim());
console.log(`✅ index.ts creado`);

console.log('\n📦 baseTheme dividido exitosamente');