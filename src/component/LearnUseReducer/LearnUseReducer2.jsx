import React, { useReducer } from 'react'

//useState => component will render when state variable changes
//useReducer => component will  render if dispatch is called


const LearnUseReducer2 = () => {
    let reducer=(state,action)=>{
        return state+1
    }
    let [state,dispatch]=useReducer(reducer,0)
    console.log("i am component")
  return (
    <div>
      {state}
      <br />
      <button onClick={()=>{
        dispatch()
      }}>Increment</button>
    </div>
  )
}

export default LearnUseReducer2
