import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./CRUDOperation/AddProduct";
import ViewProduct from "./CRUDOperation/ViewProduct";
import NavBar from "./NavBar";
import Cart from "./CRUDOperation/Cart";
//import ProtecterRoute from "./CRUDOperation/ProtecterRoute";
import Login from "./JWT/Login";

function App() {
  //let isAdmin = true;

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AddProduct />}>
            {" "}
          </Route>
          <Route path="/addNewProduct" element={<AddProduct />}></Route>
          <Route path="/products" element={<ViewProduct />}></Route>
          <Route
            path="/cart"
            element={
              /* <ProtecterRoute isAdmin={isAdmin}>
                <Cart />
              </ProtecterRoute> 
              if we use protective ruoting it will give a some level of security for the application*/
              <Cart />
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
