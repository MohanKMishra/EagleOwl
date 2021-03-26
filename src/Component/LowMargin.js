import React from "react";
import "antd/dist/antd.css";
import Laka from "./Laka";

const LowMargin = ({ item }) => {
  return (
    <div className="top">
      <h5 className="top_header">{item.title}</h5>
      <div className="progress">
        <div className="circle">
          {item.data.map((e) => (
            <Laka item={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowMargin;
