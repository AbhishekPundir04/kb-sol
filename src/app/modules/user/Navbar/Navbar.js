import React, { useState } from 'react'
import "./navbar.scss"
import { NavLink } from "react-router-dom";
import { Grid, Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };
  return (
    <div className='main_navbar_container'>
      <Grid container>
        <Grid xs={0.5} item>
        </Grid>
        <Grid xs={3} sx={{ display: "flex", alignItems: "center" }} item>
          <div className='image-container'>
          </div>

        </Grid>
        <Grid xs={1} item>
        </Grid>

        <Grid xs={7.5} item sx={{ display: "flex", alignItems: "center" }}>
          <NavLink className="common_link" to="/">
            Home
          </NavLink>
          <NavLink className="common_link" to="/about_us">
            About
          </NavLink>
          <NavLink className="common_link" to="/services">
            Services
          </NavLink>
          <NavLink className="common_link" to="/services">
            Contact Us
          </NavLink>
          <div className="drawer-toggle" style={{ display: { xs: "block", md: "none", sm: "none", lg: "none" } }} onClick={toggleDrawer(true)}>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default Navbar