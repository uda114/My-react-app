import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  let [product, setProduct] = useState({
    productId: "",
    productName: "",
    price: "",
    productDescription: "",
    quantity: "",
    image: "",
  });

  let [message, setMessage] = useState("");
  let navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //console.log(e.target.value);
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      let result = await axios.post("http://localhost:3000/save/data", product);
      console.log(result.data);
      setProduct({
        productId: "",
        productName: "",
        price: "",
        productDescription: "",
        quantity: "",
        image: "",
      });
      setMessage(result.data.message);
      navigate("/viewProduct");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <h2>Add Product</h2>
        <h3 style={{ color: "red" }}>{message}</h3>
        <br />
        productId:{" "}
        <input
          type="text"
          placeholder="productId"
          name="productId"
          onChange={handleChange}
        />
        <br />
        productName:{" "}
        <input
          type="text"
          placeholder="Product Name"
          name="productName"
          onChange={handleChange}
        />
        <br />
        price:{" "}
        <input
          type="text"
          placeholder="Product Price"
          name="price"
          onChange={handleChange}
        />
        <br />
        productDescription :{" "}
        <input
          type="text"
          placeholder="Product Description"
          name="productDescription"
          onChange={handleChange}
        />
        <br />
        quantity:{" "}
        <input
          type="text"
          placeholder="Product Quantity"
          name="quantity"
          onChange={handleChange}
        />
        <br />
        image:{" "}
        <input
          type="file"
          name="image"
          id="image"
          placeholder="Product Image"
          onChange={handleChange}
        />
        <br />
        <br />
        <button /* onClick={handleSubmit} */>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
