import React from "react";
import "antd/dist/antd.css";
import Circle from "./Circle";
import Increment from "./Increment";

const Margin = ({ item }) => {
  return (
    <div className="top">
      <h5 className="top_header">{item.title}</h5>
      <div className="progress">
        <div className="circle">
          {item.type == "circle"&& item.data.map((e) => (
            <Circle item={e} />
          ))}
          {item.type == "increment"&& item.data.map((e) => (
            <Increment item={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Margin;
