import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DarkMode from "./components/DarkMode";
import Example from "./assets/product example.png";
import { FaPen, FaTrashCan } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Productss from "./components/Products";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  let history = useNavigate();

  const handleEdit = (id, name, description, price) => {
    localStorage.setItem("name", name);
    localStorage.setItem("description", description);
    localStorage.setItem("price", price);
    localStorage.setItem("id", id);
  };

  const handleDelete = (id) => {
    const index = Productss.map(function (e) {
      return e.id;
    }).indexOf(id);

    Productss.splice(index, 1);

    history("/products");
    alert("Product deleted !");
  };

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Productss.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Productss.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  return (
    <>
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
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
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
        <Link to="/create" className="productAdd notMess2">
          Add product
        </Link>
      </div>
      <div className="cards notMess2">
        {records && records.length > 0 ? (
          records
            .filter((item) => {
              if (searchTerm == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => {
              return (
                <div className="card">
                  <div className="inform">
                    <img src={item.image} alt="" className="productImg" />
                    <div className="productInfo">
                      <h1 className="productTitle">{item.name}</h1>
                      <p className="productDescription">{item.description}</p>
                      <p className="productPrice">{item.price}</p>
                    </div>
                  </div>
                  <div className="productBtns">
                    <Link to="/edit">
                      <button
                        onClick={() =>
                          handleEdit(
                            item.id,
                            item.name,
                            item.description,
                            item.price
                          )
                        }
                        className="productEdit anyBtn"
                      >
                        <FaPen />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="productDelete anyBtn"
                    >
                      <FaTrashCan />
                    </button>
                  </div>
                </div>
              );
            })
        ) : (
          <h2 className="noData">No data available...</h2>
        )}
      </div>
      <div className="pagination">
        {numbers.map((n, i) => (
          <li className={`${currentPage === n ? "active" : ""}`} key={i}>
            <a href="#" className="pageItem" onClick={() => changeCPage(n)}>
              {n}
            </a>
          </li>
        ))}
      </div>
    </>
  );
  function changeCPage(id) {
    setCurrentPage(id);
  }
};

export default Products;
