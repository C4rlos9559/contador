import React, { Component } from "react";
import "./App.css";

const initialClicks = 0;
const App = () => {
  const [countClicks, setCountClicks] = React.useState(initialClicks);
  function onClick() {
    setCountClicks(countClicks + 1);
    console.log();
  }
  return (
    <div>
      <SpanCount value={countClicks} />
      <ButtonCount onClick={onClick} />
    </div>
  );
};

const SpanCount = ({ value }) => {
  //const [countClicks, setCountClicks] = React.useState(initialClicks);
  return <span className="value">{value}</span>;
};

const ButtonCount = ({ onClick }) => {
  return (
    <button id="inc" onClick={onClick}>
      {"Incrementar"}
    </button>
  );
};

export default App;
