import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import SignIn from "./SignIn";
import NotFound from "./NotFound";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/create" element={<CreateProduct />}></Route>
            <Route path="/edit" element={<EditProduct />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
