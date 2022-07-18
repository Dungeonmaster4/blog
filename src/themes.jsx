import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: 'hsla(0, 0%, 30%, 1)'
        },
        secondary: {
          main: 'hsla(0, 0%, 86%, 1)'
        }
    },

    components: {
        
        MuiList: {
          styleOverrides: {
            root: {
              backgroundColor:"var(--color-ui)",
            },
          },
        },

        MuiFormLabel: {
          styleOverrides: {
            root: {
              color: "var(--color-text)"
            }
          }
        },

        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              color: "#fff"
            }
          }
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              color: "#fff"
            }
          }
        },


      },
})

