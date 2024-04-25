import React from 'react'
import { NavLink } from 'react-router-dom'

const AppLinks = () => {
  return (
    <div >
      <NavLink to='/' style={{marginRight:"30px"}}>Home</NavLink>
      <NavLink to='/contact' style={{marginRight:"30px"}}>Contact</NavLink>
      <NavLink to='/about' style={{marginRight:"30px"}}>About</NavLink>
      {/* <NavLink to='/dynamic' style={{marginRight:"30px"}}>Dynamic</NavLink> */}
      <NavLink to='/bike' style={{marginRight:"30px"}}>Bike</NavLink>
      <NavLink to='/bike/create' style={{marginRight:"30px"}}>Bike Create</NavLink>
      <NavLink to='/product/create' style={{marginRight:"30px"}}>  Product Create</NavLink>
    </div>
  )
}

export default AppLinks
/*
Home=>localhost:5173
Contact => localhost:5173/contact
About => localhost:5173/about
 */