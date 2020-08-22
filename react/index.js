import React, { useState } from "react";
import ReactDOM from "react-dom";

const HelloWorld = () => {
  const [val, setVal] = useState("hello world");
  return (
    <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
  );
};

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloWorld />, mountNode);
