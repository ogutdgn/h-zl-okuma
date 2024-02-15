import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../Urls';
import { AppBar, Toolbar, Button, Menu, MenuItem, Drawer, List, ListItem, IconButton, useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo1 from "../../assets/logos/swift-readers-logo1.png";

import { useNavigate } from 'react-router-dom';


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subRoutesOpen, setSubRoutesOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:850px)');

  const location = useLocation();
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    setMobileOpen(open);
  };

  

  const list = () => (
    <div role="presentation" onKeyDown={toggleDrawer(false)}>
        <List component="div" disablePadding>
            {routes.map((route) => {
                if (route.subRoutes) {
                    return (
                        <div key={route.path}>
                            <ListItem 
                                button 
                                key={route.path} 
                                onClick={() => { setSubRoutesOpen(!subRoutesOpen); }}
                                sx={{ 
                                  color: 'black',
                                  '&.active': { backgroundColor: '#1664c0', color: 'white', fontWeight: 'bold' },
                                }}
                            >
                                {route.name}
                            </ListItem>
                            {subRoutesOpen && (
                                <List component="div" disablePadding>
                                    {route.subRoutes.map((subRoute) => (
                                        <ListItem
                                            key={subRoute.path}
                                            component={NavLink}
                                            to={subRoute.path}
                                            onClick={toggleDrawer(false)}
                                            sx={{ 
                                              color: 'black',
                                              paddingLeft: "32px",
                                              '&.active': { backgroundColor: '#1664c0', color: 'white', fontWeight: 'bold' },
                                            }}
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
                            key={route.path} 
                            component={NavLink} 
                            to={route.path} 
                            onClick={toggleDrawer(false)}
                            sx={{ 
                              color: 'black',
                              '&.active': { backgroundColor: '#1664c0', color: 'white', fontWeight: 'bold' },
                            }}
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
    <AppBar position="fixed" sx={{ backgroundColor: '#f7f7f7', maxHeight: '15vh' }}>
  <Toolbar sx={{ padding: "30px", justifyContent: "space-between", minHeight: '15vh', alignItems: 'center' }}>
    <div style={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")}>
      <img src={logo1} style={{  height: '5vh' }} alt="logo" />
      {/* <h3 style={{ color: "black" }}>SWIFT READERS</h3> */}
    </div>
    {isMobile ? (
      <>
        <IconButton edge="end" aria-label="menu" onClick={toggleDrawer(true)} sx={{ color: 'black' }}>
          <MenuIcon sx={{ color: 'black' }} />
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
                    sx={{ color: 'black', backgroundColor: '#f7f7f7', '&:hover': { backgroundColor: '#f7f7f7', fontWeight: "bold" } }}
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
                          sx={{ 
                              color: 'black',
                              '&:hover': { backgroundColor: 'white', fontWeight: "bold", color: "black" },
                              '&.active': { backgroundColor: '#1664c0', color: 'white', fontWeight: 'bold' },
                              '&.active:hover': { backgroundColor: '#1664c0', color: 'white' }
                          }}
                          className={location.pathname === subRoute.path ? 'active' : ''}
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
                        sx={{ 
                            color: 'black', 
                            backgroundColor: '#f7f7f7',
                            marginRight: "20px", 
                            padding: "10px",
                            width: 100,
                            '&:hover': { backgroundColor: '#f7f7f7', fontWeight: "bold" },
                            '&.active': { backgroundColor: '#1664c0', color: 'white', fontWeight: 'bold' },
                            '&.active:hover': { backgroundColor: '#1664c0', color: 'white' }
                        }} 
                        className={location.pathname === route.path ? 'active' : ''}
                    >
                        {route.name}
                    </Button>
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


