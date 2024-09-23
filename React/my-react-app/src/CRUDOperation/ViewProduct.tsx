import axios from "axios";
import { useEffect, useState } from "react";
import "./View.css";

type Product = {
  id: number;
  productname: string;
  price: number;
  productdescription: string;
  quantity: number;
  image: string;
};

const ViewProduct = () => {
  let [vproduct, setVProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        let result = await axios.get("http://localhost:3000/get/data");
        console.log(result.data);
        setVProduct(result.data);
        console.log(vproduct);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {vproduct.map((p: Product) => {
            return (
              <tr key={p.id}>
                <td>{p.productname}</td>
                <td>{p.price}</td>
                <td>{p.productdescription}</td>
                <td>{p.quantity}</td>
                <td>{p.image}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewProduct;
