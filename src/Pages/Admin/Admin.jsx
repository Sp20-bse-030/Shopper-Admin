import React from "react";
import '../Admin/Admin.css'
import Sidebar from "../../Components/Sidebar/sidebar";
import {Routes, Route} from 'react-router-dom'
import Addproduct from "../../Components/AddProduct/Addproduct";
import Listproduct from "../../Components/Listproduct/Listproducty";

const Admin = ()=>{
  return (
    <div className="admin">
      <Sidebar/>
      <Routes>
        <Route path="/addproduct" element={<Addproduct/>}/>
        <Route path="/Listproduct" element={<Listproduct/>}/>
      </Routes>
    </div>
  )
}
export default Admin