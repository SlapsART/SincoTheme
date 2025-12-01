import { createTheme, ThemeOptions } from '@mui/material/styles';
//import CosmosTheme from './tokens/ThemeCOSMOS';
import CosmosTheme from './tokens/themeTokensCosmos.json';

/**
 * TEMA BASE - CONFIGURACIONES COMUNES PARA TODAS LAS MARCAS
 *
 * Este archivo contiene todas las configuraciones compartidas entre las diferentes marcas.
 * Incluye:
 * - Colores semánticos (error, warning, info, success)
 * - Configuraciones de grises
 * - Configuraciones de componentes (excepto colores específicos de marca)
 * - Configuraciones de espaciado y formas
 * - Configuraciones de DataGrid y otros componentes complejos
 */

export const baseThemeConfig: ThemeOptions = {
  // ============================================================================
  // SOMBRAS PERSONALIZADAS - Suaves con tono azul-grisáceo para light theme
  // ============================================================================
  shadows: [
    'none',
    '0px 2px 1px -1px rgba(93, 109, 126, 0.16), 0px 1px 1px 0px rgba(93, 109, 126, 0.12), 0px 1px 3px 0px rgba(93, 109, 126, 0.08)',
    '0px 3px 1px -2px rgba(93, 109, 126, 0.16), 0px 2px 2px 0px rgba(93, 109, 126, 0.12), 0px 1px 5px 0px rgba(93, 109, 126, 0.08)',
    '0px 3px 3px -2px rgba(93, 109, 126, 0.16), 0px 3px 4px 0px rgba(93, 109, 126, 0.12), 0px 1px 8px 0px rgba(93, 109, 126, 0.08)',
    '0px 2px 4px -1px rgba(93, 109, 126, 0.16), 0px 4px 5px 0px rgba(93, 109, 126, 0.12), 0px 1px 10px 0px rgba(93, 109, 126, 0.08)',
    '0px 3px 5px -1px rgba(93, 109, 126, 0.17), 0px 5px 8px 0px rgba(93, 109, 126, 0.13), 0px 1px 14px 0px rgba(93, 109, 126, 0.08)',
    '0px 3px 5px -1px rgba(93, 109, 126, 0.17), 0px 6px 10px 0px rgba(93, 109, 126, 0.13), 0px 1px 18px 0px rgba(93, 109, 126, 0.08)',
    '0px 4px 5px -2px rgba(93, 109, 126, 0.17), 0px 7px 10px 1px rgba(93, 109, 126, 0.13), 0px 2px 16px 1px rgba(93, 109, 126, 0.08)',
    '0px 5px 5px -3px rgba(93, 109, 126, 0.18), 0px 8px 10px 1px rgba(93, 109, 126, 0.14), 0px 3px 14px 2px rgba(93, 109, 126, 0.09)',
    '0px 5px 6px -3px rgba(93, 109, 126, 0.18), 0px 9px 12px 1px rgba(93, 109, 126, 0.14), 0px 3px 16px 2px rgba(93, 109, 126, 0.09)',
    '0px 6px 6px -3px rgba(93, 109, 126, 0.18), 0px 10px 14px 1px rgba(93, 109, 126, 0.14), 0px 4px 18px 3px rgba(93, 109, 126, 0.09)',
    '0px 6px 7px -4px rgba(93, 109, 126, 0.19), 0px 11px 15px 1px rgba(93, 109, 126, 0.14), 0px 4px 20px 3px rgba(93, 109, 126, 0.09)',
    '0px 7px 8px -4px rgba(93, 109, 126, 0.19), 0px 12px 17px 2px rgba(93, 109, 126, 0.15), 0px 5px 22px 4px rgba(93, 109, 126, 0.09)',
    '0px 7px 8px -4px rgba(93, 109, 126, 0.19), 0px 13px 19px 2px rgba(93, 109, 126, 0.15), 0px 5px 24px 4px rgba(93, 109, 126, 0.09)',
    '0px 7px 9px -4px rgba(93, 109, 126, 0.20), 0px 14px 21px 2px rgba(93, 109, 126, 0.15), 0px 5px 26px 4px rgba(93, 109, 126, 0.10)',
    '0px 8px 9px -5px rgba(93, 109, 126, 0.20), 0px 15px 22px 2px rgba(93, 109, 126, 0.15), 0px 6px 28px 5px rgba(93, 109, 126, 0.10)',
    '0px 8px 10px -5px rgba(93, 109, 126, 0.20), 0px 16px 24px 2px rgba(93, 109, 126, 0.16), 0px 6px 30px 5px rgba(93, 109, 126, 0.10)',
    '0px 8px 11px -5px rgba(93, 109, 126, 0.21), 0px 17px 26px 2px rgba(93, 109, 126, 0.16), 0px 6px 32px 5px rgba(93, 109, 126, 0.10)',
    '0px 9px 11px -5px rgba(93, 109, 126, 0.21), 0px 18px 28px 2px rgba(93, 109, 126, 0.16), 0px 7px 34px 6px rgba(93, 109, 126, 0.10)',
    '0px 9px 12px -6px rgba(93, 109, 126, 0.21), 0px 19px 29px 2px rgba(93, 109, 126, 0.16), 0px 7px 36px 6px rgba(93, 109, 126, 0.11)',
    '0px 10px 13px -6px rgba(93, 109, 126, 0.22), 0px 20px 31px 3px rgba(93, 109, 126, 0.17), 0px 8px 38px 7px rgba(93, 109, 126, 0.11)',
    '0px 10px 13px -6px rgba(93, 109, 126, 0.22), 0px 21px 33px 3px rgba(93, 109, 126, 0.17), 0px 8px 40px 7px rgba(93, 109, 126, 0.11)',
    '0px 10px 14px -6px rgba(93, 109, 126, 0.22), 0px 22px 35px 3px rgba(93, 109, 126, 0.17), 0px 8px 42px 7px rgba(93, 109, 126, 0.11)',
    '0px 11px 14px -7px rgba(93, 109, 126, 0.23), 0px 23px 36px 3px rgba(93, 109, 126, 0.18), 0px 9px 44px 8px rgba(93, 109, 126, 0.12)',
    '0px 11px 15px -7px rgba(93, 109, 126, 0.23), 0px 24px 38px 3px rgba(93, 109, 126, 0.18), 0px 9px 46px 8px rgba(93, 109, 126, 0.12)',
  ] as any,

  // ============================================================================
  // PALETA DE COLORES COMPARTIDOS
  // ============================================================================
  palette: {
    mode: 'light',

    // COLORES SEMÁNTICOS - Compartidos entre todas las marcas
    error: {
      50: CosmosTheme['brand-colors'].red[50].$value,
      100: CosmosTheme['brand-colors'].red[100].$value,
      200: CosmosTheme['brand-colors'].red[200].$value,
      300: CosmosTheme['brand-colors'].red[300].$value,
      400: CosmosTheme['brand-colors'].red[400].$value,
      500: CosmosTheme['brand-colors'].red[500].$value,
      600: CosmosTheme['brand-colors'].red[600].$value,
      700: CosmosTheme['brand-colors'].red[700].$value,
      800: CosmosTheme['brand-colors'].red[800].$value,
      900: CosmosTheme['brand-colors'].red[900].$value,
      main: CosmosTheme['brand-colors'].red[700].$value,
      light: CosmosTheme['brand-colors'].red[400].$value,
      dark: CosmosTheme['brand-colors'].red[800].$value,
      contrastText: CosmosTheme.palette.error.contrastText.$value.Light,
    },
    warning: {
      50: CosmosTheme['brand-colors'].orange[50].$value,
      100: CosmosTheme['brand-colors'].orange[100].$value,
      200: CosmosTheme['brand-colors'].orange[200].$value,
      300: CosmosTheme['brand-colors'].orange[300].$value,
      400: CosmosTheme['brand-colors'].orange[400].$value,
      500: CosmosTheme['brand-colors'].orange[500].$value,
      600: CosmosTheme['brand-colors'].orange[600].$value,
      700: CosmosTheme['brand-colors'].orange[700].$value,
      800: CosmosTheme['brand-colors'].orange[800].$value,
      900: CosmosTheme['brand-colors'].orange[900].$value,
      main: CosmosTheme['brand-colors'].orange[500].$value,
      light: CosmosTheme['brand-colors'].orange[400].$value,
      dark: CosmosTheme['brand-colors'].orange[900].$value,
      contrastText: CosmosTheme.palette.warning.contrastText.$value.Light,
    },
    info: {
      50: CosmosTheme['brand-colors'].lightBlue[50].$value,
      100: CosmosTheme['brand-colors'].lightBlue[100].$value,
      200: CosmosTheme['brand-colors'].lightBlue[200].$value,
      300: CosmosTheme['brand-colors'].lightBlue[300].$value,
      400: CosmosTheme['brand-colors'].lightBlue[400].$value,
      500: CosmosTheme['brand-colors'].lightBlue[500].$value,
      600: CosmosTheme['brand-colors'].lightBlue[600].$value,
      700: CosmosTheme['brand-colors'].lightBlue[700].$value,
      800: CosmosTheme['brand-colors'].lightBlue[800].$value,
      900: CosmosTheme['brand-colors'].lightBlue[900].$value,
      main: CosmosTheme['brand-colors'].lightBlue[700].$value,
      light: CosmosTheme['brand-colors'].lightBlue[500].$value,
      dark: CosmosTheme['brand-colors'].lightBlue[900].$value,
      contrastText: CosmosTheme.palette.info.contrastText.$value.Light,
    },
    success: {
      50: CosmosTheme['brand-colors'].green[50].$value,
      100: CosmosTheme['brand-colors'].green[100].$value,
      200: CosmosTheme['brand-colors'].green[200].$value,
      300: CosmosTheme['brand-colors'].green[300].$value,
      400: CosmosTheme['brand-colors'].green[400].$value,
      500: CosmosTheme['brand-colors'].green[500].$value,
      600: CosmosTheme['brand-colors'].green[600].$value,
      700: CosmosTheme['brand-colors'].green[700].$value,
      800: CosmosTheme['brand-colors'].green[800].$value,
      900: CosmosTheme['brand-colors'].green[900].$value,
      main: CosmosTheme['brand-colors'].green[800].$value,
      light: CosmosTheme['brand-colors'].green[400].$value,
      dark: CosmosTheme['brand-colors'].green[900].$value,
      contrastText: CosmosTheme.palette.success.contrastText.$value.Light,
    },

    // COLORES SECUNDARIOS - Cyan compartido
    secondary: {
      50: CosmosTheme['brand-colors'].secondary[50].$value,
      100: CosmosTheme['brand-colors'].secondary[100].$value,
      200: CosmosTheme['brand-colors'].secondary[200].$value,
      300: CosmosTheme['brand-colors'].secondary[300].$value,
      400: CosmosTheme['brand-colors'].secondary[400].$value,
      500: CosmosTheme['brand-colors'].secondary[500].$value,
      600: CosmosTheme['brand-colors'].secondary[600].$value,
      700: CosmosTheme['brand-colors'].secondary[700].$value,
      800: CosmosTheme['brand-colors'].secondary[800].$value,
      900: CosmosTheme['brand-colors'].secondary[900].$value,
      main: CosmosTheme['brand-colors'].secondary[500].$value,
      light: CosmosTheme['brand-colors'].secondary[300].$value,
      dark: CosmosTheme['brand-colors'].secondary[700].$value,
      contrastText: CosmosTheme.palette.secondary.contrastText.$value.Light,
    },

    // COLORES GRISES - Paleta completa compartida
    grey: {
      50: CosmosTheme['brand-colors'].grey[50].$value,
      100: CosmosTheme['brand-colors'].grey[100].$value,
      200: CosmosTheme['brand-colors'].grey[200].$value,
      300: CosmosTheme['brand-colors'].grey[300].$value,
      400: CosmosTheme['brand-colors'].grey[400].$value,
      500: CosmosTheme['brand-colors'].grey[500].$value,
      600: CosmosTheme['brand-colors'].grey[600].$value,
      700: CosmosTheme['brand-colors'].grey[700].$value,
      800: CosmosTheme['brand-colors'].grey[800].$value,
      900: CosmosTheme['brand-colors'].grey[900].$value,
    },

    // COLORES DE FONDO Y SUPERFICIE
    background: {
      default: CosmosTheme.palette.background.default.$value.Light,
      paper: CosmosTheme.palette.background.paper.$value.Light,
    },

    // COLORES DE TEXTO
    text: {
      primary: CosmosTheme.palette.text.primary.$value.Light,
      secondary: CosmosTheme.palette.text.secondary.$value.Light,
      disabled: CosmosTheme.palette.text.disabled.$value.Light,
    },

    // DIVISORES Y ELEMENTOS DE ACCIÓN
    divider: CosmosTheme.palette.divider.$value.Light,
    action: {
      active: CosmosTheme.palette.action.active.$value.Light,
      hover: CosmosTheme.palette.action.hover.$value.Light,
      selected: CosmosTheme.palette.action.selected.$value.Light,
      disabled: CosmosTheme.palette.action.disabled.$value.Light,
      disabledBackground: CosmosTheme.palette.action.disabledBackground.$value.Light,
      focus: CosmosTheme.palette.action.focus.$value.Light,
    },
  },

  // ============================================================================
  // TIPOGRAFÍA BASE - COMPARTIDA
  // ============================================================================
  typography: {
    // body3 es una variante personalizada compartida por todas las marcas
    body3: {
      fontSize: `${CosmosTheme.typography.body[3].fontSize.$value}px`,
      fontWeight: `${CosmosTheme.typography.body[3].fontWeight.$value}`,
      lineHeight: `${CosmosTheme.typography.body[3].lineHeight.$value}px`,
      letterSpacing: `${CosmosTheme.typography.body[3].letterSpacing.$value}px`,
    },
  } as any,

  // ============================================================================
  // ESPACIADO Y FORMAS - COMPARTIDO
  // ============================================================================
  spacing: 8,
  shape: {
    borderRadius: CosmosTheme.shape.borderRadius.$value,
  },

  // ============================================================================
  // COMPONENTES BASE - CONFIGURACIONES COMPARTIDAS
  // ============================================================================
  components: {
    // ========================================================================
    // COMPONENTES DE INTERACCIÓN
    // ========================================================================

    // BOTONES - Configuración base sin colores específicos
    MuiButton: {
      defaultProps: {
        size: 'small'
      },
      styleOverrides: {
        root: ({ ownerState }: any) => ({
          textTransform: 'none',
          borderRadius: CosmosTheme.shape.borderRadius.$value,
          ...(ownerState.size === 'small' && {
            paddingBlock: `${CosmosTheme._components.muiButton.small.py.$value}px`,
            paddingInline: `${CosmosTheme._components.muiButton.small.px.$value}px`,
            fontSize: `${CosmosTheme.typography._components.button.small.fontSize.$value}px`,
            lineHeight: `${CosmosTheme.typography._components.button.small.lineHeight.$value}px`,
          }),
          ...(ownerState.size === 'medium' && {
            paddingBlock: `${CosmosTheme._components.muiButton.medium.py.$value}px`,
            paddingInline: `${CosmosTheme._components.muiButton.medium.px.$value}px`,
            fontSize: `${CosmosTheme.typography._components.button.medium.fontSize.$value}px`,
            lineHeight: `${CosmosTheme.typography._components.button.medium.lineHeight.$value}px`,
          }),
          ...(ownerState.size === 'large' && {
            paddingBlock: `${CosmosTheme._components.muiButton.large.py.$value}px`,
            paddingInline: `${CosmosTheme._components.muiButton.large.px.$value}px`,
            fontSize: `${CosmosTheme.typography._components.button.large.fontSize.$value}px`,
            lineHeight: `${CosmosTheme.typography._components.button.large.lineHeight.$value}px`,
          }),
        }),
      },  
    },

    // ========================================================================
    // COMPONENTES DE FORMULARIO E INPUTS
    // ========================================================================

    // CAMPOS DE ENTRADA - Configuración base para todos los inputs
    MuiInputBase: {
      defaultProps: {
        margin: "none",
      },
      styleOverrides: {
        root: {
          ".MuiOutlinedInput-input.MuiInputBase-inputSizeSmall": {
            paddingBlock: `${CosmosTheme._components.muiInput.muiInputBase.py.$value}px`,
          },
        },
      },
    },

    // OUTLINED INPUT - Borde hover personalizado
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette._components.input.outlined.root.$value.Light
              : CosmosTheme.palette._components.input.outlined.root.$value.Dark
          },
        }),
        notchedOutline: ({ theme }: any) => ({
          borderColor: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.input.outlined.notchedOutline.$value.Light
            : CosmosTheme.palette._components.input.outlined.notchedOutline.$value.Dark
        }),
        input: ({
          fontSize: `${CosmosTheme._components.muiInput.muiOutlinedInput.input.fontSize.$value}px`,
          fontWeight: `${CosmosTheme._components.muiInput.muiOutlinedInput.input.fontWeight.$value}`,
          lineHeight: `${CosmosTheme._components.muiInput.muiOutlinedInput.input.lineHeight.$value}px`,
          letterSpacing: `${CosmosTheme._components.muiInput.muiOutlinedInput.input.letterSpacing.$value}px`,
        }),
      },
    },

    // FILLED INPUT
    MuiFilledInput: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          '&:before': {
            borderColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette._components.input.filled.enabledFill.$value.Light
              : CosmosTheme.palette._components.input.filled.enabledFill.$value.Dark,
          },
          '&:hover:not(.Mui-disabled):before': {
            borderColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette.primary._states.outlinedBorder.$value.Light
              : CosmosTheme.palette.primary._states.outlinedBorder.$value.Dark
          },
        }),
      },
    },

    // STANDARD INPUT
    MuiInput: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          '&:before': {
            borderColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette.divider.$value.Light
              : CosmosTheme.palette.divider.$value.Dark,
          },
          '&:hover:not(.Mui-disabled):before': {
            borderColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette.primary._states.outlinedBorder.$value.Light
              : CosmosTheme.palette.primary._states.outlinedBorder.$value.Dark
          },
        }),
      },
    },

    // ETIQUETAS DE CAMPOS (LABELS)
    MuiInputLabel: {
      defaultProps: {
        margin: "dense",
      },
      styleOverrides: {
        asterisk: ({ theme }: any) => ({
          color: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.input.label.asterisk.$value.Light
            : CosmosTheme.palette._components.input.label.asterisk.$value.Dark
        }),
        error: ({ theme }: any) => ({
          color: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.input.label.error.$value.Light
            : CosmosTheme.palette._components.input.label.error.$value.Dark
        }),
        root: {
          fontSize: `${CosmosTheme._components.muiInput.muiInputLabel.root.fontSize.$value}px`,
          lineHeight: `${CosmosTheme._components.muiInput.muiInputLabel.root.lineHeight.$value}px`,
        },
        filled: {
          "&.MuiInputLabel-filled.MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)": {
            transform: "translate(12px, 15px) scale(1)",
          },
          "&.MuiInputLabel-filled.MuiInputLabel-sizeMedium:not(.MuiInputLabel-shrink)": {
            transform: "translate(12px, 19px) scale(1)",
          },
        },
        standard: {
          "&.MuiInputLabel-standard.MuiInputLabel-sizeSmall:not(.MuiInputLabel-shrink)": {
            transform: "translate(0, 14px) scale(1)",
          },
          "&.MuiInputLabel-standard.MuiInputLabel-sizeMedium:not(.MuiInputLabel-shrink)": {
            transform: "translate(0, 16px) scale(1)",
          },
        },
        outlined: {
          "&.MuiInputLabel-outlined.MuiInputLabel-sizeSmall": {
            transform: "translate(14px, 7px) scale(1)",
          },
          "&.MuiInputLabel-outlined": {
            transform: "translate(14px, 14px) scale(1)",
            "&.MuiInputLabel-shrink": {
              transform: "translate(16px, -7px) scale(0.8)",
            },
          },
        },
      },
    },

    // CAMPOS DE TEXTO COMPLETOS
    MuiTextField: {
      defaultProps: {
        size: 'small'
      },
      variants: [
        {
          props: { variant: "standard", margin: "none" },
          style: {
            ".MuiInputBase-input.MuiInputBase-inputSizeSmall": {
              padding: `${CosmosTheme._components.muiTextField.standard.padding.$value}px`,
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          '& .MuiInputAdornment-root': {
            '& .MuiIconButton-root': {
              padding: `${CosmosTheme._components.muiTextField.root.padding.$value}px !important`,
              '& .MuiSvgIcon-root': {
                fontSize: `${CosmosTheme._components.muiTextField.root.muiSvgIcon.$value}px`,
              },
            },
            '& .MuiSvgIcon-root': {
              fontSize: `${CosmosTheme._components.muiTextField.root.muiSvgIcon.$value}px`,
            },
          },
        }
      },
    },

    // CONTROLES DE FORMULARIO
    MuiFormControl: {
      defaultProps: {
        size: 'small'
      },
    },

    // SELECT
    MuiSelect: {
      defaultProps: {
        size: 'small'
      },
      styleOverrides: {
        select: {
          fontSize: `${CosmosTheme._components.muiSelect.fontSize.$value}px`,
        },
      },
    },

    MuiList: {
      defaultProps: { dense: true },
    },
    MuiTable: {
      defaultProps: { size: 'small' },
    },
    MuiIconButton: {
      defaultProps: { size: 'small' },
    },

    // AUTOCOMPLETE
    MuiAutocomplete: {
      defaultProps: {
        size: 'small'
      },
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            '&.MuiInputBase-sizeSmall': {
              minHeight: `${CosmosTheme._components.muiAutocomplete.small.minHeight.$value}px`,
              paddingBlock: `${CosmosTheme._components.muiAutocomplete.small.py.$value}px`,
              paddingInline: `${CosmosTheme._components.muiAutocomplete.small.px.$value}px`,
              '& .MuiInputBase-input': {
                paddingBlock: `${CosmosTheme._components.muiAutocomplete.small.inputBase.py.$value}px`,
                paddingInline: `${CosmosTheme._components.muiAutocomplete.small.inputBase.px.$value}px`,
                fontSize: `${CosmosTheme._components.muiAutocomplete.small.inputBase.fontSize.$value}px`,
              },
              '& .MuiChip-root': {
                height: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.height.$value}px`,
                fontSize: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.fontSize.$value}px`,
                margin: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.margin.$value}px`,
                '& .MuiChip-label': {
                  paddingBlock: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.label.py.$value}px`,
                  paddingInline: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.label.px.$value}px`,
                  lineHeight: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.label.lineHeight.$value}px`,
                },
                '& .MuiChip-deleteIcon': {
                  fontSize: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.deleteIcon.fontSize.$value}px`,
                  marginTop: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.deleteIcon.my.$value}px`,
                  marginBottom: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.deleteIcon.my.$value}px`,
                  marginRight: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.deleteIcon.marignRight.$value}px`,
                  marginLeft: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.deleteIcon.marignLeft.$value}px`,
                },
                '& .MuiChip-icon': {
                  fontSize: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.icon.fontSize.$value}px`,
                  marginLeft: `${CosmosTheme._components.muiAutocomplete.small._componentes.chip.icon.marignLeft.$value}px`,
                },
              },
            },
          },
        },
        inputRoot: {
          '&.MuiInputBase-sizeSmall': {
            minHeight: `${CosmosTheme._components.muiAutocomplete.input.small.minHeight.$value}px`,
            paddingBlock: `${CosmosTheme._components.muiAutocomplete.input.small.py.$value}px`,
            paddingInline: `${CosmosTheme._components.muiAutocomplete.input.small.px.$value}px`,
            '& .MuiInputBase-input': {
              padding: '4px 0',
              paddingBlock: `${CosmosTheme._components.muiAutocomplete.input.small.base.py.$value}px`,
              paddingInline: `${CosmosTheme._components.muiAutocomplete.input.small.base.px.$value}px`,
              fontSize: `${CosmosTheme._components.muiAutocomplete.input.small.base.fontSize.$value}px`,
            },
          },
        },
        input: {
          fontSize: `${CosmosTheme._components.muiAutocomplete.input.fontSize.$value}px`,
        },
      },
    },
    MuiTabs: {  
      styleOverrides: {
        root: {
          minHeight: `${CosmosTheme._components.muiTabs.minHeight.$value}px`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minHeight: `${CosmosTheme._components.muiTab.minHeight.$value}px`,
        },
      },
    },

    // ========================================================================
    // COMPONENTES DE FEEDBACK Y NOTIFICACIÓN
    // ========================================================================

    // ALERTAS
    MuiAlert: {
      styleOverrides: {
        standardError: ({ theme }: any) => ({
          backgroundColor: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.alert.error.background.$value.Light
            : CosmosTheme.palette._components.alert.error.background.$value.Dark
        }),
        standardWarning: ({ theme }: any) => ({
          backgroundColor: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.alert.warning.background.$value.Light
            : CosmosTheme.palette._components.alert.warning.background.$value.Dark
        }),
        standardInfo: ({ theme }: any) => ({
          backgroundColor: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.alert.info.background.$value.Light
            : CosmosTheme.palette._components.alert.info.background.$value.Dark
        }),
        standardSuccess: ({ theme }: any) => ({
          backgroundColor: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.alert.success.background.$value.Light
            : CosmosTheme.palette._components.alert.success.background.$value.Dark
        }),
      },
    },

    // APP BAR
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          backgroundColor: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.appBar.defaultFill.$value.Light
            : CosmosTheme.palette._components.appBar.defaultFill.$value.Dark
        }),
      },
    },

    // AVATAR
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          backgroundColor: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.avatar.fill.$value.Light
            : CosmosTheme.palette._components.avatar.fill.$value.Dark,
          color: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.avatar.color.$value.Light
            : CosmosTheme.palette._components.avatar.color.$value.Dark
        }),
      },
    },  

    // SWITCH
    MuiSwitch: {
      styleOverrides: {
        sizeSmall: {  
          width: `${CosmosTheme._components.muiSwitch.width.$value}px`,
          height: `${CosmosTheme._components.muiSwitch.height.$value}px`,
          padding: `${CosmosTheme._components.muiSwitch.padding.$value}px`,
          '& .MuiSwitch-switchBase': {
            padding: `${CosmosTheme._components.muiSwitch.base.padding.$value}px`,
            '&.Mui-checked': {
              transform: 'translateX(16px)',
            },
          },
          '& .MuiSwitch-thumb': {
            width: `${CosmosTheme._components.muiSwitch.thumb.width.$value}px`,
            height: `${CosmosTheme._components.muiSwitch.thumb.height.$value}px`,
          },
          '& .MuiSwitch-track': {
            borderRadius: `${CosmosTheme._components.muiSwitch.track.borderRadius.$value}px`,
          },
        },
        thumb: ({ theme }: any) => ({
          backgroundColor: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.switch.thumb.$value.Light
            : CosmosTheme.palette._components.switch.thumb.$value.Dark
        }),
        track: ({ theme }: any) => ({
          backgroundColor: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.switch.track.$value.Light
            : CosmosTheme.palette._components.switch.track.$value.Dark,
          opacity: 0.5,
          '.Mui-checked.Mui-checked + &': {
            backgroundColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette.primary.main.$value.Light
              : CosmosTheme.palette.primary.main.$value.Dark,
            opacity: 1,
          },
        }),
        switchBase: ({ theme, ownerState }: any) => ({
          '&.Mui-disabled': {
            '& .MuiSwitch-thumb': {
              backgroundColor: theme.palette.mode === 'light'
                ? CosmosTheme.palette._components.switch.thumb.$value.Light
                : CosmosTheme.palette._components.switch.thumb.$value.Dark
            },
          },
          '&.Mui-checked': {
            '& + .MuiSwitch-track': {
              backgroundColor: ownerState.color === 'default'
                ? CosmosTheme.palette._components.switch.track.$value.Light
                : theme.palette[ownerState.color]?.main || CosmosTheme.palette._components.switch.track.$value,
              opacity: 1,
            },
          },
        }),
        colorPrimary: ({ theme }: any) => ({
          '&.Mui-checked': {
            color: theme.palette.common.white,
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'light'
                ? CosmosTheme.palette.primary.main.$value.Light
                : CosmosTheme.palette.primary.main.$value.Dark,
              opacity: 1,
            },
          },
        }),
        colorSecondary: ({ theme }: any) => ({
          '&.Mui-checked': {
            color: theme.palette.common.white,
            '& + .MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'light'
                ? CosmosTheme.palette.secondary.main.$value.Light
                : CosmosTheme.palette.secondary.main.$value.Dark,
              opacity: 1,
            },
          },
        }),
      },
    },

    // RATING
    MuiRating: {
      styleOverrides: {
        root: ({theme}: any) => ({
          '& .MuiRating-iconEmpty':{
            color: theme.palette.mode === 'light'
              ? CosmosTheme.palette._components.rating.enabledBorder.$value.Light
              : CosmosTheme.palette._components.rating.enabledBorder.$value.Dark,
          },
          '& .MuiRating-iconFilled':{
            color: theme.palette.mode === 'light'
              ? CosmosTheme['brand-colors'].orange[500].$value
              : CosmosTheme['brand-colors'].orange[400].$value,
          }
        }),
      },
    },

    // SNACKBAR
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiSnackbarContent-root': ({ theme }: any) => ({
            backgroundColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette._components.snackbar.fill.$value.Light
              : CosmosTheme.palette._components.snackbar.fill.$value.Dark,
            color: theme.palette.mode === 'light'
              ? CosmosTheme.palette._components.snackbar.color.$value.Light
              : CosmosTheme.palette._components.snackbar.color.$value.Dark,
          }),
        },
      },
    },

    // TOOLTIP
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }: any) => ({
          backgroundColor: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.tooltip.fill.$value.Light
            : CosmosTheme.palette._components.tooltip.fill.$value.Dark,
          color: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.tooltip.color.$value.Light 
            : CosmosTheme.palette._components.tooltip.color.$value.Dark,
        }),
        arrow: ({ theme }: any) => ({
          color: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.tooltip.fill.$value.Light
            : CosmosTheme.palette._components.tooltip.fill.$value.Dark,
        }),
      },
    },

    // BACKDROP
    MuiBackdrop: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          backgroundColor: theme.palette.mode === 'light'
            ? CosmosTheme.palette._components.backdrop.fill.$value.Light
            : CosmosTheme.palette._components.backdrop.fill.$value.Dark
        }),
      },
    },

    // ========================================================================
    // COMPONENTES DE DATOS Y DISPLAY
    // ========================================================================

    // CHIPS
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: `${CosmosTheme._components.muiChip.borderRadius.$value}px`,
          fontSize: `${CosmosTheme._components.muiChip.fontSize.$value}px`,
          lineHeight: `${CosmosTheme._components.muiChip.lineHeight.$value}px`,
        },
        outlined: ({ theme }: any) => ({
          '&.MuiChip-colorDefault': {
            borderColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette.divider.$value.Light
              : CosmosTheme.palette.divider.$value.Dark,
          },
        }),
      },
    },

    // CARD
    MuiCard: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          '&.MuiPaper-outlined': {
            borderColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette.divider.$value.Light
              : CosmosTheme.palette.divider.$value.Dark,
          },
        }),
      },
    },

    // PAPER
    MuiPaper: {
      styleOverrides: {
        outlined: ({ theme }: any) => ({
          borderColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette.divider.$value.Light
              : CosmosTheme.palette.divider.$value.Dark,  
        }),
      },
    },

    // ACCORDION
    MuiAccordion: {
      styleOverrides: {
        root: ({ theme }: any) => ({
          '&:before': {
            backgroundColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette.divider.$value.Light
              : CosmosTheme.palette.divider.$value.Dark,
          },
        }),
      },
    },

    // STEPPER
    MuiStepConnector: {
      styleOverrides: {
        line: ({ theme }: any) => ({
          borderColor: theme.palette.mode === 'light'
              ? CosmosTheme.palette.divider.$value.Light
              : CosmosTheme.palette.divider.$value.Dark,
        }),
      },
    },

    // BREADCRUMBS
    MuiBreadcrumbs: {
      styleOverrides: {
        ol: {
          '& .MuiBreadcrumbs-separator': ({ theme }: any) => ({
            color: theme.palette.mode === 'light'
              ? CosmosTheme.palette.divider.$value.Light
              : CosmosTheme.palette.divider.$value.Dark,
          }),
        },
      },
    },

    // INPUT ADORNMENT
    MuiInputAdornment: {
      styleOverrides: {
        root: ({
          '& .MuiIconButton-root': {
            padding: `${CosmosTheme._components.muiIconButton.padding.$value}px !important`,
            '& .MuiSvgIcon-root': {
              fontSize: `${CosmosTheme._components.muiIconButton.fontSize.$value}px !important`,
            },
          },
        }),
      },
    },
  },
};

// Creamos el theme base usando createTheme
export const baseTheme = createTheme(baseThemeConfig);

export default baseTheme;
