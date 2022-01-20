import React from "react";
import { Link, Outlet } from "react-router-dom";

interface Props {}

const Sidebar = (props: Props) => {
  
  return (
    <nav>
          <ul>
            <li>
              <Link to="/">Employee Form</Link>
            </li>
            <li>
              <Link to="/tablelist">Table View</Link>
            </li>
          </ul>
        </nav>
  );
};

export default Sidebar;
