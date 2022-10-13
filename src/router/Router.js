import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import { Draggable, Comp1 } from "../components/index";

const Router = () => {
  return (
    <div className="routes">
      <Routes>
        <Route exact path="/comp1" element={<Comp1 />} />
        <Route exact path="/Draggable" element={<Draggable />} />
      </Routes>
    </div>
  );
};

export default Router;
