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
import Exercise2 from "../pages/ReadingExercise/Exercise2";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import BlogView from "../pages/Blogs/BlogView";
import BlogsPage from "../pages/Blogs/BlogsPage";




const AppRouter = () => {
  // if(window.location.pathname === "/"){
  //   window.location.pathname = "/anasayfa";
  // }
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/blogs" element={<BlogsPage/>} />
                <Route path="/blogs/:blogTitle" element={<BlogView/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/exercise/reading-test" element={<ReadingTest/>} />
                <Route path="/exercise/reading-exercise" element={<ReadingExercise/>} />
                <Route path="/exercise/reading-exercise2" element={<Exercise2/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter;