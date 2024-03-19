import React from "react";
import { FaRegMoon } from "react-icons/fa";

const DarkMode = () => {
  return (
    <div>
      <li className="modeL">
        <h3 className="navLink darkM">
          <div className="darkImg">
            <FaRegMoon className="icm moon" />
          </div>
          <h4 className="navL">Dark Mode</h4>
        </h3>
      </li>
    </div>
  );
};

export default DarkMode;
