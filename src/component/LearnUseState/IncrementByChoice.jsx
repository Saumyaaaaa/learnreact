import React, { useState } from "react";

const IncrementByChoice = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      count is {count}
      <br />
      <button
        onClick={() => {
          setCount(count + 2);
        }}
      >
        increment by two
      </button>
      <br />
      <button
        onClick={() => {
          setCount(count + 100);
        }}
      >
        increment by hundred
      </button>
    </div>
  );
};

export default IncrementByChoice;
