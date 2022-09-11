import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import routes from "../Urls";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    
    <div className="headerDiv">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hızlı Okuma
          </Typography>
          {
            routes.map((route, index) => {
              return(
                <NavLink
                  to={route.path}
                  key={index}
                  //className="link"
                  //activeclassname="active"
                  className="link"
                  //activeClassName="activeRoute"
                  //activeStyle={{ color: 'teal' }}
                >
                  <h6>{route.name}</h6>
                </NavLink>
              )
            })
          }
        </Toolbar>
    </div>
    
  );
}

export default Header;