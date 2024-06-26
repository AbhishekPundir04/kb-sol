import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import "./style.scss"
import { Grid, Switch } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';

export default function SearchAppBar() {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className='main-container-div'>
        <AppBar position="static" sx={{ background: "#33ED0D", height: "45px" }}>
          <Toolbar
            sx={{ height: "45px" }}
          >
            <Grid container >
              <Grid xs={3} sm={3} md={3} lg={6} xl={7} sx={{ display: "flex", alignItems: "center" }} item>
                <Typography variant='h6'>Theme</Typography>
                <Switch checked={darkMode} onChange={handleThemeToggle} />
              </Grid>
              <Grid xs={5} sm={3} md={5} lg={3} xl={2} sx={{ display: "flex", alignItems: "center" }} item>
                <Email />
                <Typography variant='h7' style={{ marginLeft: "12px", fontWeight: "600" }}>Phone: +124 548 698 254
                </Typography>
              </Grid>
              <Grid xs={4} sm={6} md={4} lg={3} xl={3} sx={{ display: "flex", alignItems: "center" }} item>
                  <Phone />
                  <Typography variant='h7' style={{ marginLeft: "12px", fontWeight: "600" }}>154 Av the good, New York</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  );
}
