import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../Urls';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Drawer, List, ListItem, IconButton, useMediaQuery, CssBaseline } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subRoutesOpen, setSubRoutesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // New state to manage active link
  const [hoveredButton, setHoveredButton] = useState(null); // New state to manage hovered button  
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    setMobileOpen(open);
  };

  const handleMouseEnter = (path) => {
    setHoveredButton(path);
  }
  
  const handleMouseLeave = () => {
    setHoveredButton(null);
  }
  
  
  const list = () => (
    <div role="presentation" onKeyDown={toggleDrawer(false)}>
      <List 
        component="div" 
        disablePadding 
        className={`subRoutesList ${subRoutesOpen ? 'subRoutesOpen' : ''}`}
      >
        {routes.map((route) => {
          const active = activeLink === route.path; // New
          const hovered = hoveredButton === route.path; // New
          const listItemStyle = {  // New
            backgroundColor: active ? 'blue' : (hovered ? 'blue' : 'transparent'),
            color: active ? 'white' : 'black'
          };
          if (route.subRoutes) {
            return (
              <div key={route.path}>
                <ListItem 
                  button 
                  key={route.path} 
                  component={NavLink} 
                  to={route.path} 
                  onClick={() => { toggleDrawer(false)(); setActiveLink(route.path); }}
                  onMouseEnter={() => handleMouseEnter(route.path)}
                  onMouseLeave={handleMouseLeave}
                  style={{ backgroundColor: "red"}}
                >
                  {route.name}
                </ListItem>
                {subRoutesOpen && (
                  <List component="div" disablePadding>
                    {route.subRoutes.map((subRoute) => (
                      <ListItem
                        button
                        key={subRoute.path}
                        component={NavLink}
                        to={subRoute.path}
                        onClick={toggleDrawer(false)}  // Close the drawer when a sub-route is clicked
                        style={{ paddingLeft: '32px' }}  // Indentation for sub-routes
                      >
                        {subRoute.name}
                      </ListItem>
                    ))}
                  </List>
                )}
              </div>
            );
          } else {
            return (
              <ListItem 
                button 
                key={route.path} 
                component={NavLink} 
                to={route.path} 
                onClick={toggleDrawer(false)}
              >
                {route.name}
              </ListItem>
            );
          }
        })}
      </List>
    </div>
  );
  
  

  return (
    <AppBar position="static" style={{ marginBottom: '20px', backgroundColor: 'white' }}>
        <Toolbar sx={{ padding: "30px" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: 'black' }}>
                Swift Readers
            </Typography>
            {isMobile ? (
                <>
                    <IconButton edge="end" color="black" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon style={{ color: 'black' }} />
                    </IconButton>
                    <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
                        {list()}
                    </Drawer>
                </>
            ) : (
                routes.map((route) => {
                    if (route.subRoutes) {
                        return (
                            <div key={route.path}>
                                <Button
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onMouseEnter={e => setAnchorEl(e.currentTarget)}
                                    sx={{ color: 'black' }}
                                    className='button-hover'
                                >
                                    {route.name}
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    onMouseLeave={() => setAnchorEl(null)}
                                >
                                    {route.subRoutes.map((subRoute) => (
                                        <MenuItem
                                            key={subRoute.path}
                                            onClick={handleClose}
                                            component={NavLink}
                                            to={subRoute.path}
                                            style={{ color: 'black' }}
                                        >
                                            {subRoute.name}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </div>
                        );
                    } else {
                        return (
                          <NavLink
                          to={route.path}
                          key={route.path}
                          style={{ textDecoration: 'none', marginRight: '15px' }}
                          className="nav-link"
                          activeClassName="active-link"
                      >
                          <Button 
                              style={{ color: 'black', marginRight: "20px", padding: "15px", borderRadius: "50px" }}
                              className='button-hover'
                          >{route.name}</Button>
                      </NavLink>
                        );
                    }
                })
            )}
        </Toolbar>
    </AppBar>
);
};

export default Header;
