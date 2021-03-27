import React from "react";

const Top = ({ item }) => {
  console.log(item);
  return (
    <div className="ttt">
      <div>{item.name}</div>
    </div>
  );
};

export default Top;
