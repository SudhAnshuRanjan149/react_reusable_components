import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import "./sidebar.css";

const components = ["Draggable", "Comp1"];

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_container">
        <div className="sidebar_heading">Components List</div>
        {components.map((component, index) => {
          return (
            <NavLink
              to={component}
              className={(state) =>
                state.isActive
                  ? "active_link sidebar_item"
                  : "inactive_link sidebar_item"
              }
            >
              {component}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
