import  { useReducer } from "react";

const LearnUseReducer3 = () => {
  let reducer = (state, action) => {
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else {
      return state;
    }
  };
  let [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      {state}
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default LearnUseReducer3;
