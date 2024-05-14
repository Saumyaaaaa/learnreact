import { useEffect, useState } from "react";
const LearnUseEffect2 = () => {
  console.log("components run successfully");
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(100);

  useEffect(() => {
    console.log("useEffect1 runs successfully");
    //if you miss[]useEffect will run in every render
  });
  useEffect(() => {
    console.log("useEffect2 runs successfully");
    //useEffect runs in first render only
  }, []);
  useEffect(() => {
    console.log("useEffect3 runs successfully");
    //useEffect runs in first render 
    //from second render it will only execute if count1 value changes
  }, [count1]);
  return (
    <div>
      LearnUseEffect2
      <div>Count is {count1}</div>
      <br />
      <div>Count is {count2}</div>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Increment count 1
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        Increment count 2
      </button>
    </div>
  );
};
export default LearnUseEffect2;
