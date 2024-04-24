import React from "react";
import { Route, Routes } from "react-router-dom";
//
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>This is Home Page</div>}></Route>
        <Route path="/contact" element={<div>This is contact Page</div>}></Route>
        <Route path="/about" element={<div>This is about Page</div>}></Route>
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