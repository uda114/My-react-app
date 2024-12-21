import { useContext } from "react";
import { Product } from "./types";
import { CartContext, useCart } from "./CartContext";

let products: Product[] = [
  {
    id: 1,
    name: "product1",
    price: 100,
  },
  {
    id: 2,
    name: "product2",
    price: 200,
  },
  {
    id: 3,
    name: "product3",
    price: 300,
  },
  {
    id: 4,
    name: "product4",
    price: 400,
  },
];

const Products = () => {
  let { addToCart } = useCart();

  return (
    <div>
      Products
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} - {product.price}{" "}
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
