import React from 'react';
import './App.css';
import AppRouter from './router/AppRouter';


function App() {

  // useEffect(() => {
  //   console.log(window.location.pathname); 
  //   window.location.pathname = "/anasayfa";
  // }, [])
  

  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
