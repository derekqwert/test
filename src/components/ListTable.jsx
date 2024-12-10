import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ListTable.css";
import { Button, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ItemCount from "./ItemCount";

const ListTable = () => {
  const [storeData, setStoreData] = useState([]);
  const [itemCounts, setItemCounts] = useState({});

  useEffect(() => {
    displayData();
  }, []);

  const displayData = () => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        setStoreData(response.data);
        const initialCounts = response.data.reduce((acc, product) => {
          acc[product.id] = 0;
          return acc;
        }, {});
        setItemCounts(initialCounts);
      })
      .catch((error) => console.error(error));
  };

  const handleItemCountChange = (productId, count) => {
    setItemCounts((prevCounts) => ({ ...prevCounts, [productId]: count }));
  };

  const addToCart = (product) => {
    const count = itemCounts[product.id] || 0;
    if (count > 0) {
      toast.success(`Added ${count}x "${product.title}" to cart`, {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      toast.warning("Please select a quantity before adding to cart.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container">
      <Table className="table" striped bordered hover>
        <thead>
          <tr>
            <th>Select</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {storeData.map((product) => (
            <tr key={product.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
              </td>
              <td>
                <ItemCount
                  onCountChange={(count) => handleItemCountChange(product.id, count)}
                />
              </td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => addToCart(product)}
                >
                  Add
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ToastContainer />
    </div>
  );
};

export default ListTable;