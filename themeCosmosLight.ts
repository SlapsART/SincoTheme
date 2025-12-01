import { createTheme, ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { baseThemeConfig } from './baseTheme';
//import CosmosTheme from './tokens/ThemeCOSMOS';
import CosmosTheme from './tokens/themeTokensCosmos.json';

/**
 * TEMA COSMOS LIGHT - CONFIGURACIONES ESPECÍFICAS DE LA MARCA COSMOS
 *
 * Este archivo contiene únicamente las configuraciones específicas de la marca Cosmos:
 * - Paleta de colores primarios (violeta)
 * - Tipografía (Roboto - desde tokens)
 * - Configuraciones de iconos
 */

export const cosmosLightConfig: ThemeOptions = {
  // ============================================================================
  // PALETA DE COLORES COSMOS
  // ============================================================================
  palette: {
    // COLORES PRIMARIOS - Violeta/Morado Cosmos
    primary: {
      50: CosmosTheme['brand-colors'].primary.light[50].$value,
      100: CosmosTheme['brand-colors'].primary.light[100].$value,
      200: CosmosTheme['brand-colors'].primary.light[200].$value,
      300: CosmosTheme['brand-colors'].primary.light[300].$value,
      400: CosmosTheme['brand-colors'].primary.light[400].$value,
      500: CosmosTheme['brand-colors'].primary.light[500].$value,
      600: CosmosTheme['brand-colors'].primary.light[600].$value,
      700: CosmosTheme['brand-colors'].primary.light[700].$value,
      800: CosmosTheme['brand-colors'].primary.light[800].$value,
      900: CosmosTheme['brand-colors'].primary.light[900].$value,
      main: CosmosTheme['brand-colors'].primary.light[500].$value,
      light: CosmosTheme['brand-colors'].primary.light[400].$value,
      dark: CosmosTheme['brand-colors'].primary.light[900].$value,
      contrastText: CosmosTheme.palette.primary.contrastText.$value.Light,
    },
  },

  // ============================================================================
  // TIPOGRAFÍA COSMOS - ROBOTO
  // ============================================================================
  typography: {
    fontFamily: CosmosTheme.typography.fontFamily.$value,

    // JERARQUÍA DE TÍTULOS - Basada en tokens Cosmos
    h1: {
      fontSize: `${CosmosTheme.typography.heading.h1.fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.heading.h1.fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.heading.h1.lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.heading.h1.letterSpacing.$value}px`,
    },
    h2: {
      fontSize: `${CosmosTheme.typography.heading.h2.fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.heading.h2.fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.heading.h2.lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.heading.h2.letterSpacing.$value}px`,
    },
    h3: {       
      fontSize: `${CosmosTheme.typography.heading.h3.fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.heading.h3.fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.heading.h3.lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.heading.h3.letterSpacing.$value}px`,
    },
    h4: {
      fontSize: `${CosmosTheme.typography.heading.h4.fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.heading.h4.fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.heading.h4.lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.heading.h4.letterSpacing.$value}px`,
    },
    h5: {
      fontSize: `${CosmosTheme.typography.heading.h5.fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.heading.h5.fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.heading.h5.lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.heading.h5.letterSpacing.$value}px`,
    },
    h6: {
      fontSize: `${CosmosTheme.typography.heading.h6.fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.heading.h6.fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.heading.h6.lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.heading.h6.letterSpacing.$value}px`,
    },

    // TEXTO DE CUERPO
    body1: {
      fontSize: `${CosmosTheme.typography.body[1].fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.body[1].fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.body[1].lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.body[1].letterSpacing.$value}px`,
    },
    body2: {
      fontSize: `${CosmosTheme.typography.body[2].fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.body[2].fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.body[2].lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.body[2].letterSpacing.$value}px`,
    },

    // ELEMENTOS ESPECIALES
    button: {
      fontSize: '0.8125rem',
      fontWeight: 500,
      lineHeight: '1.25rem',
      textTransform: 'none' as const,
    },
    caption: {
      fontSize: `${CosmosTheme.typography.caption.fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.caption.fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.caption.lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.caption.letterSpacing.$value}px`,
    },
    overline: {
      fontSize: `${CosmosTheme.typography.overline.fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.overline.fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.overline.lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.overline.letterSpacing.$value}px`,
      textTransform: 'uppercase' as const,
    },
    subtitle1: {
      fontSize: `${CosmosTheme.typography.subtitle[1].fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.subtitle[1].fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.subtitle[1].lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.subtitle[1].letterSpacing.$value}px`,
    },
    subtitle2: {
      fontSize: `${CosmosTheme.typography.subtitle[2].fontSize.$value}px`,
      fontWeight: CosmosTheme.typography.subtitle[2].fontWeight.$value,
      lineHeight: `${CosmosTheme.typography.subtitle[2].lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.subtitle[2].letterSpacing.$value}px`,
    },
  },

  // ============================================================================
  // COMPONENTES ESPECÍFICOS COSMOS
  // ============================================================================
  components: {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'medium',
      },
      styleOverrides: {
        root: {
          '&.MuiSvgIcon-fontSizeSmall': {
            fontSize: '1.25rem',
          },
          '&.MuiSvgIcon-fontSizeMedium': {
            fontSize: '1.5rem',
          },
          '&.MuiSvgIcon-fontSizeLarge': {
            fontSize: '2rem',
          },
        },
      },
    },
  },
};

// Combinamos el baseThemeConfig con las configuraciones específicas de Cosmos Light
const mergedConfig = deepmerge(baseThemeConfig, cosmosLightConfig);

// Creamos el theme final con createTheme
export const themeCosmosLight = createTheme(mergedConfig);

export default themeCosmosLight;
