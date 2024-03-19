import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import DarkMode from "./DarkMode";
import { FaSearch } from "react-icons/fa";
import Productss from "./Products";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  let history = useNavigate();

  const index = Productss.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    e.preventDefault();

    let a = Productss[index];
    a.name = name;
    a.description = description;
    a.price = price;

    history("/products");
    alert("Product saved !");
  };

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setDescription(localStorage.getItem("description"));
    setPrice(localStorage.getItem("price"));
    setId(localStorage.getItem("id"));
  }, []);

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
      <div className="notMess2 editPage">
        <form className="editForm" action="">
          <h1 className="functionText">Edit a product</h1>
          <div className="formPage">
            <input
              type="text"
              placeholder="Enter name..."
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>
          <div className="formPage">
            <input
              type="text"
              placeholder="Enter description..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>
          <div className="formPage">
            <input
              type="number"
              placeholder="Enter price..."
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>
          <button className="functionBtn" onClick={(e) => handleSubmit(e)}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
