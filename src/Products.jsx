import React from "react";
import Sidebar from "./components/Sidebar";
import DarkMode from "./components/DarkMode";
import Example from "./assets/product example.png";
import Example2 from "./assets/example2.png";
import { FaPen, FaTrashCan } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Products = () => {
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
      <div className="productFunctions">
        <h1 className="notMess2 homeText">Products page</h1>
        <button className="productAdd notMess2">Add product</button>
      </div>
      <div className="cards notMess2">
        <div className="card">
          <div className="inform">
            <img className="productImg" src={Example} alt="" />
            <div className="productInfo">
              <h1 className="productTitle">Graystone vase</h1>
              <p className="productDescription">
                A timeless ceramic vase with a tri color grey glaze.
              </p>
              <p className="productPrice">£85</p>
            </div>
          </div>
          <div className="productBtns">
            <button className="productEdit anyBtn">
              <FaPen />
            </button>
            <button className="productDelete anyBtn">
              <FaTrashCan />
            </button>
          </div>
        </div>
        <div className="card">
          <div className="inform">
            <img className="productImg" src={Example2} alt="" />
            <div className="productInfo">
              <h1 className="productTitle">Basic white vase</h1>
              <p className="productDescription">
                Beautiful and simple this is one for the classics.
              </p>
              <p className="productPrice">£85</p>
            </div>
          </div>
          <div className="productBtns">
            <button className="productEdit anyBtn">
              <FaPen />
            </button>
            <button className="productDelete anyBtn">
              <FaTrashCan />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
