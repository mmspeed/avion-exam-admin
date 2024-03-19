import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DarkMode from "./DarkMode";
import { FaSearch } from "react-icons/fa";
import Productss from "./Products";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      b = description,
      c = price;

    Productss.push({ id: uniqueId, name: a, description: b, price: c });

    history("/products");
    alert("Product added !");
  };

  return (
    <div>
      <Sidebar />
      <div className="kindHeader notMess">
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
      <div className="notMess2 createPage">
        <form action="" className="editForm">
          <h1 className="functionText">Create a product</h1>
          <div className="formPage">
            <input
              type="text"
              placeholder="Enter name..."
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="formPage">
            <input
              type="text"
              placeholder="Enter description..."
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="formPage">
            <input
              type="number"
              placeholder="Enter price..."
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <button className="functionBtn" onClick={(e) => handleSubmit(e)}>
            Add product
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
