import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: 'hsla(0, 0%, 30%, 1)'
        },
    },

    components: {
        
        MuiList: {
          styleOverrides: {
            root: {
              backgroundColor:"var(--color-ui)",
            },
          },
        },
      },
})

