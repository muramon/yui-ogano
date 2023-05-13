import React from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Image from '/Users/muramoto/dev_project/yui-ogano/src/static/images/test.jpg';
import { IconButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

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

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  // 追加: Drawer の開閉
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen); // Drawer の開閉状態を反転
  };

  const navigate = useNavigate();
  
  return (
    <ThemeProvider theme={myTheme}>
      <AppBar position="fixed" color="primary">
      <Drawer variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <LocalSeeIcon onClick={() => navigate("gallery")}/>
            </ListItemIcon>
            <ListItemText primary="Gallery" onClick={() => navigate("/gallery")}/>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Biography"/>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Zine"/>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact"/>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary="Instagram"/>
          </ListItem>
        </List>
      </Drawer>
      <Toolbar variant="dense">
        <IconButton edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="secondary" component="div">
          Yui Ogano
        </Typography>
      </Toolbar>
      </AppBar>

      <Box sx={{ 
        width : 4000,
        height: 640,
        background: 'gray',
        display: 'flex',
        flexDirection: 'row'
        }}>
        <Box sx={{ 
          width : 480,
          height: 640,
          background: 'black',
          }}>
          <CardMedia
          component="img"
          alt="green iguana"
          height="640"
          image={Image}
        />
        </Box>

        <Box sx={{ 
          width : 480,
          height: 640,
          background: 'black',
          }}>
          <CardMedia
          component="img"
          alt="green iguana"
          height="640"
          image={Image}
        />
        </Box>
        <Box sx={{ 
          width : 480,
          height: 640,
          background: 'black',
          }}>
          <CardMedia
          component="img"
          alt="green iguana"
          height="640"
          image={Image}
        />
        </Box>
        <Box sx={{ 
          width : 480,
          height: 640,
          background: 'black',
          }}>
          <CardMedia
          component="img"
          alt="green iguana"
          height="640"
          image={Image}
        />
        </Box>
        <Box sx={{ 
          width : 480,
          height: 640,
          background: 'black',
          }}>
          <CardMedia
          component="img"
          alt="green iguana"
          height="640"
          image={Image}
        />
        </Box>
        <Box sx={{ 
          width : 480,
          height: 640,
          background: 'black',
          }}>
          <CardMedia
          component="img"
          alt="green iguana"
          height="640"
          image={Image}
        />
        </Box>
        <Box sx={{ 
          width : 480,
          height: 640,
          background: 'black',
          }}>
          <CardMedia
          component="img"
          alt="green iguana"
          height="640"
          image={Image}
        />
        </Box>
        <Box sx={{ 
          width : 480,
          height: 640,
          background: 'black',
          }}>
          <CardMedia
          component="img"
          alt="green iguana"
          height="640"
          image={Image}
        />
        </Box>
        
      </Box>
    </ThemeProvider>
  );
}

export default App;
