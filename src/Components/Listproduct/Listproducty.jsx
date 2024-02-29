import React, { useEffect, useState } from "react";
import '../Listproduct/Listproduct.css'
import logo from '../../assets/delete.png'


const Listproduct = ()=>{
    const [allproducts, setallproducts] = useState([]);


    const fetchproductinfo = async () => {
            const response = await fetch('http://localhost:4000/allproducts');
            const data = await response.json()
                setallproducts(data);
                
            
        
    };
 
    useEffect(()=>{
        fetchproductinfo()
    }, [])
    
    const deleteproduct = async (id)=>{
        await fetch('http://localhost:4000/deleteproduct',{
            method: "POST",
            headers:{
                Accept: 'application/json',
                'content-type' : 'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await fetchproductinfo()
    }
   
    return(
        <div className="productlist">
            <div className="productformat">
                <div>Product</div>
                <div>Title</div>
                <div>Old Price</div>
                <div>New Price</div>
                <div>Category</div>
                <div>Remove</div>
            </div>
            
<div className="allitemdetails">
    
    {allproducts.map((product, index)=>{
        return  <div key={index}  className="totaliotemdetails">
            <div className="itemdetails">
        <img src={product.img} alt=""/>
        <p>{product.name}</p>
        <p>${product.oldprice}</p>
        <p>${product.newprice}</p>
        <p>{product.category}</p>
        <img onClick={()=>{deleteproduct(product.id)}} src={logo} alt=""/>
     </div>
     <hr/>
    </div>
    })}
           
            
            </div>

        </div>
    )
}
export default Listproduct