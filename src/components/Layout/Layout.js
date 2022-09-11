import React from 'react';
import "./Layout.css";

// import { getPageTitleByRoute } from '../Urls';
import Header from '../Header/Header';


const Layout = ({ children }) => {
  
  let winHeight = window.innerHeight * 0.8

  return (
    <div className='allDiv'>
        

        <div className="headerSide">
          <div>
              <div className="disable-text-selection">
                <Header/>
                  {/* <div className='pathName'>
                    {
                      getPageTitleByRoute(window.location.pathname)
                    }
                  </div> */}
              </div>

              <div className='childs'>
                
                <div style={{height: winHeight}} className='bodyWrapper'>
                  <div className='contentWrapper enable-text-selection'>
                    {children}
                  </div>
              </div>
          </div>

          </div>
        </div>  
      
    </div>
  )
}

export default Layout