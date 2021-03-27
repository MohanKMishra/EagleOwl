import React from "react";
import "./App.css";
import Margin from "./Component/Margin";
import List from "./Component/List";
import data from "./data/margins.json";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        {data.map((e) => (
          <Margin item={e} />
        ))}
      </div>
      <div className="table">
        <List />
      </div>
    </div>
  );
};

export default App;
