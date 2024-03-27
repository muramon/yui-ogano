import Bar from '../components/Bar'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


function Gallery() {
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
        {/* <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}> */}
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100vh', marginTop: '10%' }}>
            {/* <Box sx={{ my: 2 }}> */}
            <Box sx={{ my: 2, mt: { xs: '2rem', sm: 0 }, mx: { xs: '1rem', sm: 0 }, p: 2 }}>
            {/* <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, textAlign: 'left'}}>
                Biography
            </Typography> */}
            <Typography variant="h4" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, textAlign: 'center' }}>
                <br />Yui Ogano
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' }, textAlign: 'left' }}>
                <br /><br />
                1997 born in Sakado, Japan.<br />
                Graduated from the Department of Photography, College of Art, Nihon University.<br />
                After graduation, she worked at a studio.<br />
                After leaving, she lives and works in Tokyo.<br />
                <br /><br />
                1997年 坂戸市生まれ <br />
                2019年 日本大学芸術学部写真学科卒業 <br />
                2022年 都内スタジオ勤務を経て、フリーランスとして活動

            </Typography>
            </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Gallery