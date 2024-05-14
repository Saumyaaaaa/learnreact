import React, { useContext } from "react";
import GreatGrandChild from "./GreatGrandChild";
import { Context1, Context2 } from "../../../App";

const GrandChild = ({ count }) => {
  let context = useContext(Context1);
  let context2 = useContext(Context2);
  console.log(context);
  console.log(context2);
  console.log(" i am grandChild");
  return (
    <div>
      <GreatGrandChild count={count} />
    </div>
  );
};

export default GrandChild;
