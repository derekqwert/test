import React from "react";
import Header from "./Header";
import ListTable from "./ListTable";

const Store = () => {
  return (
    <div>
      <Header />
      <h2 className='heading'>Sagnik Store</h2>
      <ListTable />
    </div>
  );
};

export default Store;
