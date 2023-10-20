import React from 'react';
import "./Layout.css";

// import { getPageTitleByRoute } from '../Urls';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = ({ children }) => {

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
                
                <div className='bodyWrapper'>
                  <div className='contentWrapper enable-text-selection'>
                    {children}
                  </div>
              </div>
              <Footer/>
          </div>

          </div>
        </div>  
      
    </div>
  )
}

export default Layout