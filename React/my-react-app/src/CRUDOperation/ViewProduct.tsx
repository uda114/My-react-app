import axios from "axios";
import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import "./View.css";

type Product = {
  productid: number;
  productname: string;
  price: number;
  productdescription: string;
  quantity: number;
  image: string;
};

const ViewProduct = () => {
  //let [vproduct, setVProduct] = useState([]);
  let [vproduct, setVProduct] = useState<Product[]>([]);
  //we can use this way also and can remove the product decl in map method

  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        let result = await axios.get("http://localhost:3000/get/data");
        //console.log(result.data);
        setVProduct(result.data);
        //console.log(vproduct);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Error fetching product data");
      }
    };

    getProduct();
  }, [vproduct]);

  function handleUpdate(id: number) {
    console.log(id);
  }

  async function handleDelete(id: number) {
    //console.log(id);

    try {
      let result = await axios.delete(`http://localhost:3000/delete/${id}`);
      console.log(result.data);
      if (result.data.message === "Data deleted successfully") {
        setVProduct((prevProducts) =>
          prevProducts.filter((p) => p.productid !== id)
        );
      } else {
        console.log("Error deleting product");
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product List</h2>
      {error && <div>{error}</div>}
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Image</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {vproduct.map((p) => {
            return (
              <tr key={p.productid}>
                <td>{p.productname}</td>
                <td>{p.price}</td>
                <td>{p.productdescription}</td>
                <td>{p.quantity}</td>
                <td>{p.image}</td>
                <td>
                  <button
                    type="submit"
                    onClick={() => handleUpdate(p.productid)}
                  >
                    Update
                  </button>
                  <button
                    type="submit"
                    onClick={() => handleDelete(p.productid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProduct;
