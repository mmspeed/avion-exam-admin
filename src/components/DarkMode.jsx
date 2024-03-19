import React, { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { PiSunBold } from "react-icons/pi";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode"); // Add a class to the body for styling
  };

  return (
    <div>
      <li className="modeL">
        <button onClick={toggleDarkMode} className="navLink darkM">
          {isDarkMode ? (
            <div className="navLink darkMM">
              <div className="darkImg">
                <PiSunBold className="icm moon" />
              </div>
              <h4 className="navL">Light Mode</h4>
            </div>
          ) : (
            <div className="navLink darkMM">
              <div className="darkImg">
                <FaRegMoon className="icm moon" />
              </div>
              <h4 className="navL">Dark Mode</h4>
            </div>
          )}
        </button>
      </li>
    </div>
  );
};

export default DarkMode;
