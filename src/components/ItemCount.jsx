import React, { useReducer } from "react";
import { Button } from "react-bootstrap";

const initialState = 0;

const itemCountReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
};

const ItemCount = ({ onCountChange }) => {
  const [itemCount, dispatch] = useReducer(itemCountReducer, initialState);

  const handleCountChange = (type) => {
    const newCount =
      type === "increment" ? itemCount + 1 : Math.max(itemCount - 1, 0);
    dispatch({ type });
    onCountChange(newCount);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Button variant="success" onClick={() => handleCountChange("increment")}>
        +
      </Button>
      <span>{itemCount}</span>
      <Button variant="danger" onClick={() => handleCountChange("decrement")}>
        -
      </Button>
    </div>
  );
};

export default ItemCount;
