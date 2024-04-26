import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = ({detail}) => {
   let navigate = useNavigate();
  return (
    <>
    <div>
      <button onClick={()=>{
       navigate("/contact",{replace:true})
      }}>Change Url to contact</button>
    </div>
    </>
  )
}

export default About
