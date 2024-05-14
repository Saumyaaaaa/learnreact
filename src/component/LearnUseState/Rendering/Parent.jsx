import  { useState } from 'react'
import Child from './Child'
//a component will render
//if its own state variable changes
//or if its one of the parents gets render
const Parent = () => {
    console.log("i am parent")
    let[count,setCount]=useState(0)
    const incrementCount1=()=>{
        setCount(count+1);
    }
  return (
    <div>
        
      <Child count={count}/>
      
      <button onClick={incrementCount1}>Change Count</button>
    </div>
  )
}

export default Parent
/* 
parent count
child
grandchild
greatgrandchild
 */