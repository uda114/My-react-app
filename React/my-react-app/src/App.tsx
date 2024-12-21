import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
/* import AddProduct from "./CRUDOperation/AddProduct";
import ViewProduct from "./CRUDOperation/ViewProduct";
import NavBar from "./NavBar"; */
import Cart from "./CRUDOperation/Cart";
//import ProtecterRoute from "./CRUDOperation/ProtecterRoute";
import Login from "./JWT/Login";
import Logout from "./JWT/Logout";
import React, { Suspense } from "react";
import Products from "./ContextAPI/Products";
import CartProvider from "./ContextAPI/CartContext";

let NavBar = React.lazy(() => import("./NavBar"));
let AddProduct = React.lazy(() => import("./CRUDOperation/AddProduct"));
let ViewProduct = React.lazy(() => import("./CRUDOperation/ViewProduct"));

let AppRoutes = () => {
  let location = useLocation();
  let showNavBar = location.pathname !== "/" && location.pathname !== "/login";
  return (
    <div>
      {showNavBar && <NavBar />}
      <Suspense fallback={<div>Loading...</div>} />
      <Routes>
        <Route path="/" element={<Login />}>
          {" "}
        </Route>
        <Route path="/addNewProduct" element={<AddProduct />}></Route>
        <Route path="/EditNewProduct/:id" element={<AddProduct />}></Route>
        <Route path="/products" element={<ViewProduct />}></Route>
        <Route
          path="/cart"
          element={
            /* <ProtecterRoute isAdmin={isAdmin}>
              <Cart />
            </ProtecterRoute> 
            if we use protective ruoting it will give a some level of security for the application*/
            <CartProvider>
              <Cart />
            </CartProvider>
          }
        ></Route>
        <Route
          path="/pro"
          element={
            <CartProvider>
              <Products />
              <Cart />
            </CartProvider>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </div>
  );
};

function App() {
  //let isAdmin = true;
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
