import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';




export default function NavBar() {

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#000'}}>
        <Toolbar>
         
          <Typography
            style={{border:'2px dotted white', padding:'0.5em', color:'#fff'}}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
            Car-Info
          </Typography>    
          
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}

