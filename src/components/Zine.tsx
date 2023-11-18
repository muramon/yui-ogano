import Bar from '../components/Bar'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


function Zine() {
    const myTheme = createTheme({
        typography: {
            h4: {
                fontStyle: 'normal',
              },
            body1: {
                fontStyle: 'normal',
              },
          },
        palette: {
          primary: {
            main: "#FFFFFF",
          },
          secondary: {
            main: "#9e9e9e",
          },
        },
      });

      return (
        <ThemeProvider theme={myTheme}>
        <Bar />
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', marginTop: '10%' }}>
            {/* <Box sx={{ my: 2 }}> */}
        <Box sx={{ my: 2, mt: { xs: '2rem', sm: 0 }, mx: { xs: '1rem', sm: 0 }, p: 2 }}>
        <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, textAlign: 'left'}}>
            Comming soon...
        </Typography>
        </Box>
        </Box>
        </ThemeProvider>
    )
}

export default Zine