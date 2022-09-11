import "./AppRouter.css"
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import React from 'react';
import { ResponseFunc, RequestFunc } from "../service/ServiceIntercepter";
import Home from "../pages/Home/Home";
import ReadingTest from "../pages/ReadingTest/ReadingTest";
import ReadingExercise from "../pages/ReadingExercise/ReadingExercise";




const AppRouter = () => {
  if(window.location.pathname === "/"){
    window.location.pathname = "/anasayfa";
  }
  return (
    <div>
        <BrowserRouter>
          <RequestFunc/>
          <ResponseFunc/>
            <Routes>
                <Route path="/anasayfa" element={<Home/>} />
                <Route path="/okumatesti" element={<ReadingExercise/>} />
                <Route path="/okumaegzersizi" element={<ReadingTest/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter;