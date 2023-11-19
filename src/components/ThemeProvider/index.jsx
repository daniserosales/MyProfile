import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.variant === 'contained' &&
              ownerState.color === 'primary' && {
                backgroundColor: '#ff9800   ',
                color: '#ff9800',
              }),
          }),
        },
      },
    },
  });
  

export default theme;
