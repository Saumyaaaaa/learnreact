import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
//attach component with url
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home name="saumya neupane"></Home>}></Route>
        <Route path="/contact" element={<Contact phone={9863336368} />}></Route>
        <Route path="/about" element={<About detail="i am a student"/>}></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;

/* 
localhost:5173 => This is  Home Page
localhost:5173/contact => This is  contact Page
localhost:5173/about => This is  about Page
 */