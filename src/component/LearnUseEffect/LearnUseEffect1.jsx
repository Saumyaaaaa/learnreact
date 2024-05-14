/* 
useState
useEffect
useRef
useContext
 */

import { useEffect } from "react";

/* 
useEffect function is a asynchronus function
it means it will execute once all code is executed
it means it will executed once dom is printed on browser
 */
const LearnUseEffect1 = () => {
    useEffect(()=>{
        console.log("B")
    },[])
    console.log("A")
  return <div>LearnUseEffect1</div>;
}

export default LearnUseEffect1
