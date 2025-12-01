const fs = require('fs');
const path = require('path');

const SOURCE_FILE = './source/tokens/themeTokensCosmos.json';
const OUTPUT_DIR = './Tokens';
const MAX_SIZE = 10 * 1024; // 10KB

function getSize(obj) {
  return Buffer.byteLength(JSON.stringify(obj, null, 2), 'utf8');
}

function splitByCategory(tokens) {
  const categories = {
    'Palette.json': {},
    'Typography.json': {},
    'Brand-Colors.json': {},
    'Breakpoints.json': {},
    'Spacing.json': {},
    'Shadows.json': {},
    'BorderRadius.json': {},
    'ZIndex.json': {}
  };

  // Mapeo de keys a categorías
  const categoryMap = {
    palette: 'Palette.json',
    colors: 'Palette.json',
    primary: 'Palette.json',
    secondary: 'Palette.json',
    typography: 'Typography.json',
    fontFamily: 'Typography.json',
    fontSize: 'Typography.json',
    fontWeight: 'Typography.json',
    lineHeight: 'Typography.json',
    brand: 'Brand-Colors.json',
    breakpoints: 'Breakpoints.json',
    spacing: 'Spacing.json',
    shadows: 'Shadows.json',
    borderRadius: 'BorderRadius.json',
    zIndex: 'ZIndex.json'
  };

  const misc = {};

  for (const [key, value] of Object.entries(tokens)) {
    let assigned = false;
    
    // Buscar categoría por nombre de key
    for (const [pattern, category] of Object.entries(categoryMap)) {
      if (key.toLowerCase().includes(pattern.toLowerCase())) {
        categories[category][key] = value;
        assigned = true;
        break;
      }
    }
    
    if (!assigned) {
      misc[key] = value;
    }
  }

  // Agregar misc si tiene contenido
  if (Object.keys(misc).length > 0) {
    categories['Misc.json'] = misc;
  }

  return categories;
}

function furtherSplit(data, baseName) {
  const parts = [];
  let currentPart = {};
  let currentSize = 2;
  let partIndex = 1;

  for (const [key, value] of Object.entries(data)) {
    const entrySize = getSize({ [key]: value });
    
    if (entrySize > MAX_SIZE) {
      console.warn(`⚠️  "${key}" excede 10KB individualmente en ${baseName}`);
      if (Object.keys(currentPart).length > 0) {
        parts.push({
          name: baseName.replace('.json', `-part-${partIndex}.json`),
          data: currentPart
        });
        partIndex++;
        currentPart = {};
        currentSize = 2;
      }
      parts.push({
        name: baseName.replace('.json', `-part-${partIndex}.json`),
        data: { [key]: value }
      });
      partIndex++;
      continue;
    }

    if (currentSize + entrySize > MAX_SIZE) {
      parts.push({
        name: baseName.replace('.json', `-part-${partIndex}.json`),
        data: currentPart
      });
      partIndex++;
      currentPart = {};
      currentSize = 2;
    }

    currentPart[key] = value;
    currentSize += entrySize;
  }

  if (Object.keys(currentPart).length > 0) {
    if (partIndex === 1) {
      parts.push({ name: baseName, data: currentPart });
    } else {
      parts.push({
        name: baseName.replace('.json', `-part-${partIndex}.json`),
        data: currentPart
      });
    }
  }

  return parts;
}

// Ejecutar
console.log('🔧 Dividiendo Tokens.json...\n');

// Verificar que existe el archivo fuente
if (!fs.existsSync(SOURCE_FILE)) {
  console.error(`❌ Error: No se encontró ${SOURCE_FILE}`);
  process.exit(1);
}

const tokens = JSON.parse(fs.readFileSync(SOURCE_FILE, 'utf8'));
const categories = splitByCategory(tokens);

// Crear directorio
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Guardar cada categoría
for (const [fileName, data] of Object.entries(categories)) {
  if (Object.keys(data).length === 0) continue;

  const fileSize = getSize(data);
  
  if (fileSize <= MAX_SIZE) {
    // Cabe en un solo archivo
    const filePath = path.join(OUTPUT_DIR, fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`✅ ${fileName} (${fileSize} bytes, ${Object.keys(data).length} keys)`);
  } else {
    // Necesita dividirse más
    const parts = furtherSplit(data, fileName);
    parts.forEach(part => {
      const filePath = path.join(OUTPUT_DIR, part.name);
      fs.writeFileSync(filePath, JSON.stringify(part.data, null, 2));
      const size = getSize(part.data);
      console.log(`✅ ${part.name} (${size} bytes, ${Object.keys(part.data).length} keys)`);
    });
  }
}

console.log('\n📦 Tokens divididos exitosamente');