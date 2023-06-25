import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        px: '20px',
        '@media (min-width:600px)': {
          gap: '60px',
          marginTop: '26px',
          justifyContent: 'left',
        },
        '@media (min-width:1200px)': {
          // marginTop: '84px',
        },
      }}
    >
      <Link to="/">
        {/* Logo */}
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px' }} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end" sx={{ display: { xs: 'none', sm: 'flex' } }}>
        {/* Home Text */}
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid', color: '#FF2625' }}>
          <b>Home</b>
        </Link>
        {/* Exercise Text */}
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>
          <b>Exercises</b>
        </a>
        <Link to="/about" style={{ textDecoration: 'none', color: '#3A1212' }}>
          <b>About Us</b>
        </Link>
      </Stack>
      <Stack direction="row" gap="40px" alignItems="center" sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
          <List sx={{ width: 250 }} onClick={closeDrawer}>
            <ListItem button component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component="a" href="#exercises">
              <ListItemText primary="Exercises" />
            </ListItem>
            <ListItem button component={Link} to="/about">
              <ListItemText primary="About Us" />
            </ListItem>
          </List>
        </Drawer>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
