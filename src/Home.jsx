import React from "react";
import Sidebar from "./components/Sidebar";
import DarkMode from "./components/DarkMode";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="notMess">
        <div className="header">
          <div className="line"></div>
          <h1 className="welcome">Avion</h1>
        </div>
        <form action="" className="formik">
          <div className="formSearch">
            <input
              className="searchInput"
              type="search"
              placeholder="Search..."
            />
            <a href="#" className="searchBtn">
              <FaSearch />
            </a>
          </div>
        </form>
        <DarkMode />
      </div>
      <h1 className="notMess2 homeText">Welcome to the Avion dashboard !</h1>
      <div className="privacyPolicy notMess2">
        <ul className="youCanDo">
          <li>Things you can do in this admin panel:</li>
        </ul>
        <div className="priorities">
          <p>1. Make A Product List</p>
          <p>2. Add A Product</p>
          <p>3. Edit A Product</p>
          <p>4. Delete A Product</p>
          <p>5. Search A Product</p>
          <p>6. Use Dark Mode</p>
        </div>
      </div>
    </>
  );
};

export default Home;
