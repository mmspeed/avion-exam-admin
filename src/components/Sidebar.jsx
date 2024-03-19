import React from "react";
import { FaHome, FaProductHunt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  const logout = () => {
    localStorage.removeItem("signIn");
    window.location.reload();
    alert("Do you want to logout ?");
  };
  return (
    <div className="sidebar">
      <header>
        <div className="sidebarText">
          <div>
            <button className="sidebarLogo">AP</button>
          </div>
          <div>
            <a href="/" className="sidebarInfo">
              Admin Panel
            </a>
          </div>
        </div>
      </header>
      <hr />
      <div className="menuBar">
        <div className="menu">
          <ul className="menuLinks">
            <a href="/" className="navLink">
              <FaHome className="ic" />
              <h4 className="navL">Home</h4>
            </a>
            <a href="/products" className="navLink">
              <FaProductHunt className="ic" />
              <h4 className="navL">Products</h4>
            </a>
          </ul>
        </div>
        <div className="sideBarBottom">
          <li>
            <a href="/login" onClick={logout} className="navLink darkM">
              <IoLogOut className="ic" />
              <h4 className="navL">LogOut</h4>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
