import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosIntance from "../JWT/axiosIntance";
import { get } from "react-hook-form";

const AddProduct = () => {
  let [product, setProduct] = useState({
    productid: "",
    productName: "",
    price: "",
    productDescription: "",
    quantity: "",
    image: "",
  });

  let { id } = useParams();
  let [message, setMessage] = useState("");
  let navigate = useNavigate();

  //console.log(id);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    //console.log(e.target.value);
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      //let result = await axios.post("http://localhost:3000/save/data", product);
      let result = await axiosIntance.post("/save/data", product);
      console.log(result.data);
      setProduct({
        productid: "",
        productName: "",
        price: "",
        productDescription: "",
        quantity: "",
        image: "",
      });
      setMessage(result.data.message);
      navigate("/products");
    } catch (error) {
      setMessage("Error connecting to the server");
      console.log(error);
    }
  }

  useEffect(() => {
    const getProduct = async () => {
      let result = await axiosIntance.get(`/get/data/${id}`);
      console.log();
      setProduct({
        productid: result.data[0].productid,
        productName: result.data[0].productname,
        price: result.data[0].price,
        productDescription: result.data[0].productdescription,
        quantity: result.data[0].quantity,
        image: result.data[0].image,
      });
    };

    if (id) {
      getProduct();
    }
  }, [id]);

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <h2>Add Product</h2>
        <h3 style={{ color: "red" }}>{message}</h3>
        <br />
        {id ? null : (
          <span>
            productId:{" "}
            <input
              type="text"
              placeholder="productId"
              name="productid"
              onChange={handleChange}
              value={product.productid}
            />
          </span>
        )}
        <br />
        productName:{" "}
        <input
          type="text"
          placeholder="Product Name"
          name="productName"
          onChange={handleChange}
          value={product.productName}
        />
        <br />
        price:{" "}
        <input
          type="text"
          placeholder="Product Price"
          name="price"
          onChange={handleChange}
          value={product.price}
        />
        <br />
        productDescription :{" "}
        <input
          type="text"
          placeholder="Product Description"
          name="productDescription"
          onChange={handleChange}
          value={product.productDescription}
        />
        <br />
        quantity:{" "}
        <input
          type="text"
          placeholder="Product Quantity"
          name="quantity"
          onChange={handleChange}
          value={product.quantity}
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
        <button /* onClick={handleSubmit} */>
          {id ? <span>Update</span> : <span>Add Product</span>}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
