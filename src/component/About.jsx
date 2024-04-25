import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = ({detail}) => {
   let navigate = useNavigate();
  return (
    <>
    <div>
      <button onClick={()=>{
       navigate("/contact")
      }}>Change Url to contact</button>
    </div>
    </>
  )
}

export default About
