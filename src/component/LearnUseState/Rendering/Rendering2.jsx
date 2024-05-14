import React, { useState } from "react";

const Rendering2 = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(100);
  const incrementCount1 = () => {
    setCount1(count1 + 1);
  };
  const incrementCount2 = () => {
    setCount2(count2 + 1);
  };
  console.log("i am rendering 2");
  return (
    <div>
      count1 is {count1}
      <button
        onClick={() => {
          {
            incrementCount1();
          }
        }}
      >
        incrementCount1
      </button>
      <br />
      count2 is {count2}
      <button
        onClick={() => {
          {
            incrementCount2();
          }
        }}
      >
        incrementCount2
      </button>
    </div>
  );
};

export default Rendering2;
