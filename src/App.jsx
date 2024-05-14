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
import { createContext, useState } from "react";
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
import FormikForm from "./component/LearnFormik/FormikForm";
import FormikTutorial from "./component/LearnFormik/FormikTutorial";
import LearnUseRef1 from "./component/LearnUseRef/LearnUseRef1";
import LearnUseState2 from "./component/LearnUseState/LearnUseState2";
import LearnUseState3 from "./component/LearnUseState/LearnUseState3";
import LearnUseState4 from "./component/LearnUseState/LearnUseState4";
import Rendering1 from "./component/LearnUseState/Rendering/Rendering1";
import Rendering2 from "./component/LearnUseState/Rendering/Rendering2";
import Parent from "./component/LearnUseState/Rendering/Parent";
import SetLocalStorage from "./component/learnlocalStorage/SetLocalStorage";
import GetLocalStorage from "./component/learnlocalStorage/GetLocalStorage";
import DeleteLocalStorage from "./component/learnlocalStorage/DeleteLocalStorage";
import SetSessionStorage from "./component/learnSessionStorage/SetSessionStorage";
import GetSessionStorage from "./component/learnSessionStorage/GetSessionStorage";
import DeleteSessionStorage from "./component/learnSessionStorage/DeleteSessionStorage";
import LearnUseEffect1 from "./component/LearnUseEffect/LearnUseEffect1";
import LearnUseEffect2 from "./component/LearnUseEffect/LearnUseEffect2";

// import Name from "./component/Name";

export let Context1 = createContext();
export let Context2 = createContext();

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
      {/* <FormikForm/> */}
      {/* <FormikTutorial/> */}
      {/* <LearnUseRef1/> */}
      {/* <LearnUseState2/> */}
      {/* <LearnUseState3/> */}
      {/* <Rendering1/> */}
      {/* <Rendering2/> */}
      {/* <Context2.Provider value={10}>
        <Context1.Provider value={{ name: "saumya", age: 21 }}>
          <Parent />
        </Context1.Provider>
      </Context2.Provider> */}
      {/* <SetLocalStorage/> */}
      {/* <GetLocalStorage/> */}
      {/* <DeleteLocalStorage/> */}
      {/* <SetSessionStorage/> */}
      {/* <GetSessionStorage/> */}
      {/* <DeleteSessionStorage/> */}
      {/* <LearnUseEffect1/> */}
      <LearnUseEffect2/>
      {/* <LearnUseState4/> */}
      {/* <Form2/> */}

      {/* <LearnUseReducer/> */}
      {/* <LearnUseReducer2/> */}
      {/* <LearnUseReducer3/> */}
    </>
  );
};
export default App;

/*
context provider 
make store 
provide value
access value
 */
