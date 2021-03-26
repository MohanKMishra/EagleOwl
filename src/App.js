import React from "react";
import "./App.css";
import LowMargin from "./Component/LowMargin";
import List from "./Component/List";

const arr = [
  {
    title: "Hile aodo dk",
    data: [
      { name: "AAMAMMO", percent: 48 },
      { name: "AAMMO", percent: 80 },
      { name: "AAO Od so", percent: 28 },
    ],
  },
  {
    title: "do dk",
    data: [
      { name: "AAMAMMO", percent: 48 },
      { name: "AAMMO", percent: 80 },
      { name: "AAO Od so", percent: 28 },
    ],
  },
  {
    title: "Hile aok",
    data: [
      { name: "AAMAMMO", percent: 48 },
      { name: "AAMMO", percent: 80 },
      { name: "AAO Od so", percent: 28 },
    ],
  },
];

const App = () => {
  return (
    <div className="App">
      <div className="header">
        {arr.map((e) => (
          <LowMargin item={e} />
        ))}
      </div>
      <div className="table">
        <List />
      </div>
    </div>
  );
};

export default App;
