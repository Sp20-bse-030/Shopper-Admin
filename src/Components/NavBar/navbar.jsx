import React from "react";
import '../NavBar/navbar.css'
import navlogo from '../../assets/Shopping.png'
import profile from '../../assets/profilelogo.png'
const Navbar = ()=>{
  return (
    <div className="navbar">
      <img className="navlogo" src={navlogo} alt="navbarlogo"/>
      <img className="profilelogo" src={profile} alt="profilelogo"/>
    </div>
  )
}
export default Navbar