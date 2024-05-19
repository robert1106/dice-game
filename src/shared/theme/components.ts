import type { Components } from '@mui/material'

export const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      html: {
        height: '100%',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      },
      main: {
        flex: 1,
        alignItems: 'center',
      },
    },
  },
  MuiFormControlLabel: {
    defaultProps: {
      labelPlacement: 'start',
      componentsProps: {
        typography: {
          sx: {
            fontSize: 17,
            fontWeight: 500,
          },
        },
      },
    },
  },
  MuiSlider: {
    defaultProps: {
      step: 1,
      size: 'small',
      valueLabelDisplay: 'auto',
    },
  },
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      size: 'large',
    },
  },
  MuiTableHead: {
    styleOverrides: {
      root: {
        '& .MuiTableCell-root': {
          fontSize: 17,
          fontWeight: 500,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontSize: 18,
      },
    },
  },
}
