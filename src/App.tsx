import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { Container } from '@mui/material';
import Image from '/Users/muramoto/dev_project/yui-ogano/src/static/images/main.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Bar from './components/Bar'


function App() {

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
        {/* <Box sx={{ 
          width : 375,
          height: 640,
          background: 'black',
          }}> */}
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
          alt="green iguana"
          image={Image}
          style={{ padding: '10vw', maxWidth: '80%', height: 'auto' }}
          />
        </Box>
        </Container>
    </ThemeProvider>
  );
}

export default App;
