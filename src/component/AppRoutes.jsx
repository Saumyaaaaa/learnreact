import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import LearnDynamic from "./LearnDynamic";
import ReadBike from "./ReadBike";
import CreateBike from "./CreateBike";
import CreateProducts from "./CreateProducts";

//attach component with url
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home name="saumya neupane"></Home>}></Route>
        <Route path="/contact" element={<Contact phone={9863336368} />}></Route>
        <Route
          path="/about"
          element={<About detail="i am a student" />}
        ></Route>
        <Route
          path="/:id/name/:id1"
          element={<LearnDynamic></LearnDynamic>}
        ></Route>{" "}
        {/* dynamic routing */}
        <Route path="*" element={<div>page is not available</div>}></Route>
        {/* component will execute if the route is other than define route */}
        <Route path="/bike" element={<ReadBike></ReadBike>}></Route>
        <Route path="/bike/create" element={<CreateBike></CreateBike>}></Route>
        <Route
          path="/product/create"
          element={<CreateProducts></CreateProducts>}
        ></Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;

/* 
localhost:5173 => This is  Home Page
localhost:5173/contact => This is  contact Page
localhost:5173/about => This is  about Page




dynamic routes

url=localhost:5173/a/b/c/d?name=saumya&age=21&isMarried=false
url=route?query
route=baseurl/params1/params2/params3/params4
query= name=saumya&age=21&isMarried=false








 */
