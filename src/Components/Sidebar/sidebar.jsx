import React from "react";
import '../Sidebar/sidebar.css'
import cart from '../../assets/cartlogo.png'
import folder from '../../assets/folder.png'
import {Link} from 'react-router-dom'

const Sidebar = ()=>{
  return (
    <div className="sidebar">
        <Link to={'/addproduct'}>
            <div className="sidebaritems">
                <img src={cart} alt="cart"/>
                <p>Add Producct</p>
            </div>
        
        </Link>
        <Link to={'/Listproduct'}>
            <div className="sidebaritems">
                <img src={folder} alt="cart"/>
                <p>List Producct</p>
            </div>
        
        </Link>
        

      
    </div>
  )
}
export default Sidebar