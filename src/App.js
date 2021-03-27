import React from "react";
import "./App.css";
import LowMargin from "./Component/LowMargin";
import List from "./Component/List";

const arr = [
  {
    title: "High Margin Recipes",
    data: [
      { name: "	Textures of lamb", percent: 48 },
      { name: "Paneer Tikka Masala", percent: 80 },
      { name: "Palak Paneer Butter Masala", percent: 28 },
    ],
  },
  {
    title: "Low Margin Recipes",
    data: [
      { name: "Textures of lamb", percent: 48 },
      { name: "Paneer Tikka Masala", percent: 80 },
      { name: "Palak Paneer Butter Masala", percent: 28 },
    ],
  },
  {
    title: "Top Fluctuating Recipes",
    data: [
      { name: "	Textures of lamb", percent: 48 },
      { name: "Paneer Tikka Masala", percent: 80 },
      { name: "Palak Paneer Butter Masala", percent: 28 },
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
