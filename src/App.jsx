// import Age from "./Age";
// import College from "./component/College";
// import Info from "./component/Info";
import Info from "./component/Info";
import LearnTernaryOperator from "./component/LearnTernaryOperator";
import LearnToUseMap from "./component/LearnToUseMap";
import DestructurePros from "./component/DestructurePros";
import LearnUseState1 from "./component/LearnUseState/LearnUseState1";
import ShowAndHideElement from "./component/LearnUseState/ShowAndHideElement";
import MyComponent from "./component/LearnUseState/MyComponent";
import { useState } from "react";
import IncrementByChoice from "./component/LearnUseState/IncrementByChoice";
import LearnButtonClick from "./component/LearnButtonClick";
import LearnInlineCss from "./component/LearnCss/LearnInlineCss";
import LearnExternalCss from "./component/LearnCss/LearnExternalCss";
import AppLinks from "./component/AppLinks";
import AppRoutes from "./component/AppRoutes";
import Form1 from "./component/learnForm/Form1";
import Form2 from "./component/learnForm/Form2";
import LearnUseReducer from "./component/LearnUseReducer/LearnUseReducer";
import LearnUseReducer2 from "./component/LearnUseReducer/LearnUseReducer2";
import LearnUseReducer3 from "./component/LearnUseReducer/LearnUseReducer3";
// import Name from "./component/Name";

let App = () => {
  let [show, setShow] = useState(true);
  return (
    <>
      <div>
        {/* <h1 style={{ backgroundColor: "blue", color: "white" }}>
          {" "}
          this my webpage
        </h1>
        <h2 style={{ backgroundColor: "red", color: "white" }}>Heading 2</h2>
        <span style={{ backgroundColor: "red", color: "white" }}>
          this is span
        </span>
        <br />
        <img src="./vite.svg" alt="image" /> */}
      </div>

      {/* <Name></Name> */}
      {/* <Age></Age> */}
      {/* <Info
       name="saumya"
        surname="neupane" 
        age={21} 
        isMarried={false}
         list={[<div>hello1</div>, <div>hello2</div>, <div>hello3</div>]} 
         father={{name:"sunil",age: 55}}> 
          </Info> */}
      {/* <College name="St lawrence"  address="chabahil " faculty="CSIT"></College> */}
      {/* <LearnToUseMap></LearnToUseMap> */}
      {/* <LearnTernaryOperator></LearnTernaryOperator> */}
      {/* <DestructurePros name="somya" age={21}></DestructurePros> */}
      {/* <LearnUseState1></LearnUseState1> */}
      {/* <ShowAndHideElement></ShowAndHideElement> */}
      {/* {show === true ? <MyComponent></MyComponent> : null}
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Close
      </button> */}
      {/* <IncrementByChoice></IncrementByChoice> */}
      {/* <LearnButtonClick/> */}
      {/* <LearnInlineCss/> */}
      {/* <LearnExternalCss/> */}
      {/* <AppLinks/> */}
      {/* <AppRoutes/> */}
      {/* <Form1/> */}
      {/* <Form2/> */}
      {/* <LearnUseReducer/> */}
      {/* <LearnUseReducer2/> */}
      <LearnUseReducer3/>
    </>
  );
};
export default App;

/*
 */
