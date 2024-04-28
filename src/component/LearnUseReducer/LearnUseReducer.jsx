import  { useReducer } from 'react'

//useReducer//(arr,obj => useReducer)
//useState //primitive (number,string,boolean,null,undefined)

//define variable using useReducer
//call variable
//change variable  of useReducer

const LearnUseReducer = () => {
    let reducer=(state,action)=>{
      return `${state} ${action}  neupane`
    }
    let[name,dispatch]=useReducer(reducer,"saumya")
  return <div>{name}
  <button onClick={()=>dispatch("Alok")}> Change Name

  </button>
  </div>;
}

export default LearnUseReducer
