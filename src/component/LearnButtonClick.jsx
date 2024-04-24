import React from "react";

const LearnButtonClick = () => {
  const handleClick = () => {
    console.log("button is clicked");
  };


  let handleClick1=()=>{
    return ()=>{
        console.log("button is clicked");
    }
  }
  return (
    <div>
      {/* <button onClick={handleClick}>Click me</button> */}
      <button style={{cursor:"pointer"}} onClick={handleClick1()}>click me</button>
    </div>
  );
};

export default LearnButtonClick;
