import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  const [text, setText] = useState("mikä olet tänään?");

  const handleClick = () => {
    if (text === "mikä olet tänään?" || text === 'mestari') {
      setText("kuningas");
    } else {
      setText("mestari");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        selvitä mikä olet
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
