import {
  createTheme
} from '@mui/material';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#8E24AA', // Set your custom primary color here
    },
    secondary: {
      main: '#7998CF', // Set your custom secondary color here
    },
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          '& .MuiDataGrid-cell': {
            justifyContent: 'center'
          },
          '& .MuiDataGrid-colCellTitle': {
            justifyContent: 'center',
          },
          '& .MuiDataGrid-columnHeaderTitleContainerContent': {
            justifyContent: 'center',
            fontWeight:'bold',
            width:'100%'
          }

        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '0.8rem'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: 8,
            fontSize: '.8rem'
          },
          '& .MuiInputLabel-root': {
            fontSize: '.8rem',
            '&.Mui-focused': {
              fontSize: '.8rem',
            },
          },
          '& .MuiInputBase-input': {
            padding: '10px 12px',
          }
        },
      },
    },
  },
});