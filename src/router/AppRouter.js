import "./AppRouter.css"
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import React from 'react';
// import Home from "../pages/Home/Home";
import ReadingTest from "../pages/ReadingTest/ReadingTest";
import ReadingExercise from "../pages/ReadingExercise/ReadingExercise";




const AppRouter = () => {
  // if(window.location.pathname === "/"){
  //   window.location.pathname = "/anasayfa";
  // }
  return (
    <div>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/anasayfa" element={<Home/>} /> */}
                <Route path="/" element={<ReadingTest/>} />
                <Route path="/okumaegzersizi" element={<ReadingExercise/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter;