import React from 'react';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { createTheme, IconButton, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Chip from '@mui/material/Chip';

function Bar() {

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

    const handleClick = () => {
        window.location.href = 'https://www.instagrm.com/16_bask/';
    };

    const handleMailClick = () => {
        window.location.href = 'mailto:yuiyuno.photo@gmail.com';
    };
    return (
        <AppBar position="fixed" color="primary">
        <Drawer variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
        >
            <List>
            <ListItem
             button
             sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0', // ホバー時の背景色を指定
                },
              }}
              >
                <ListItemIcon>
                <HomeIcon onClick={() => navigate("/")}/>
                </ListItemIcon>
                <ListItemText primary="Home" onClick={() => navigate("/")}/>
            </ListItem>
            <ListItem
             button
             sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0', // ホバー時の背景色を指定
                },
              }}
              >
                <ListItemIcon>
                <LocalSeeIcon onClick={() => navigate("gallery")}/>
                </ListItemIcon>
                <ListItemText primary="Gallery" onClick={() => navigate("/gallery")}/>
                {/* <Chip label="Gallery" variant="outlined" onClick={() => navigate("/gallery")} /> */}
            </ListItem>
            <ListItem
             button
             sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0', // ホバー時の背景色を指定
                },
              }}
              >
                <ListItemIcon>
                <AccountBoxIcon onClick={() => navigate("/biography")}/>
                </ListItemIcon>
                <ListItemText primary="Biography" onClick={() => navigate("/biography")}/>
            </ListItem>
            <ListItem
             button
             sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0', // ホバー時の背景色を指定
                },
              }}
              >
                <ListItemIcon>
                <ImportContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Zine" onClick={() => navigate("/zine")}/>
            </ListItem>
            <ListItem
             button
             sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0', // ホバー時の背景色を指定
                },
              }}
              >
                <ListItemIcon>
                <MailIcon onClick={handleMailClick}/>
                </ListItemIcon>
                <ListItemText primary="Contact" onClick={handleMailClick}/>
            </ListItem>
            <ListItem
             button
             sx={{
                '&:hover': {
                  backgroundColor: '#f0f0f0', // ホバー時の背景色を指定
                },
              }}
              >
                <ListItemIcon>
                <InstagramIcon onClick={handleClick} />
                </ListItemIcon>
                <ListItemText primary="Instagram" onClick={handleClick}/>
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
    )
}

export default Bar