import Bar from '../components/Bar'
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from '/Users/muramoto/dev_project/yui-ogano/src/static/images/main.jpg';
import Yokoimage from '/Users/muramoto/dev_project/yui-ogano/src/static/images/yoko.jpg';
import zero_eight from '/Users/muramoto/dev_project/yui-ogano/src/static/images/08.jpg';
import zero_one from '/Users/muramoto/dev_project/yui-ogano/src/static/images/01.jpg';
import zero_two from '/Users/muramoto/dev_project/yui-ogano/src/static/images/02.jpg';
import fifteen from '/Users/muramoto/dev_project/yui-ogano/src/static/images/--15.jpg';
import four_eight from '/Users/muramoto/dev_project/yui-ogano/src/static/images/--48.jpg';
import asahi31 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/1-31.jpg';
import asahi33 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/1-33.jpg';
import asahi34 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/1-34.jpg';
import pink1 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/0628_7480.jpg';
import pink2 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/0628_7767.jpg';
import hp1_75 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/HP1-75.jpg';
import hp1_99 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/HP1-99.jpg';
import hp1_123 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/HP1-123.jpg';
import hp1_125 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/HP1-125.jpg';
import hp1_167 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/HP1-167.jpg';
import hp1_173 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/HP1-173.jpg';
import hp1_180 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/HP1-180.jpg';
import hp2 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/HP2.jpg';
import hp3 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/HP3.jpg';
import hp5 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/HP5.jpg';
import hp7 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/HP7.jpg';
import senao5 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/senao5.jpg';
import p8 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/p8.jpg';
import m6 from '/Users/muramoto/dev_project/yui-ogano/src/static/images/m6.jpg';


function Gallery() {
    const myTheme = createTheme({
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
        <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '10vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >

        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={fifteen}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >

        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={four_eight}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >

        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={zero_eight}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >

        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={zero_one}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >

        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={zero_two}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={asahi31}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={asahi33}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={asahi34}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={pink1}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={pink2}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={hp1_75}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={hp1_99}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={hp1_123}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={hp1_125}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={hp1_167}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={hp1_173}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={hp1_180}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={hp2}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={hp3}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={hp5}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={hp7}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={senao5}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={p8}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >
        <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={m6}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>

        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              paddingTop: '5vw', // 画面の幅の10%を上余白に設定
            },
          }}
        >

          <CardMedia
          component="img"
          alt="photo by yui ogano"
          image={Yokoimage}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box> */}
        </Container>
        </ThemeProvider>
    )
}

export default Gallery