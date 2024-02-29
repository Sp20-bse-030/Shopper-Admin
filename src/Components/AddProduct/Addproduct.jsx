import React, { useState } from "react";
import '../AddProduct/Addproduct.css'
import upload from '../../assets/Upload.png'

const Addproduct = ()=>{
    const [image, setimage] = useState(false)
    const [productdetails, setproductdetails] = useState({
        name: "",
        oldprice: "",
        newprice : "",
        category: "women",
        img: ""
    })
const uploadinmage = (e)=>{
    setimage(e.target.files[0])

}
const changehandler = (e)=>{
    setproductdetails({...productdetails, [e.target.name]: e.target.value})
}
const handleAddproduct = async ()=>{
    console.log(productdetails)
    let responsedata;
    let product = productdetails;
    let formdata = new FormData();
    formdata.append('product', image)

    await fetch('http://localhost:4000/upload', {
        method: "POST",
        headers:{
            Accept: 'application/json'
        },
        body: formdata
    })
    .then((resp)=>resp.json())
    .then((data)=>{responsedata= data})
    if(responsedata.success){
        product.img = responsedata.url;
    }
    await fetch('http://localhost:4000/addproduct',{
        method:"POST",
        headers:{
            Accept: 'application/json',
            'content-type': 'application/json',
        },
        body: JSON.stringify(product)
    }).then((resp)=>resp.json()).then((data)=>{
        // if(data.success){
            
        //     alert("Successfully uploaded")
        // }
        // else{
        //     alert("Failed")
        // }
    })
}

    return(
        <div className="addproduct">
            <div className="addproductfeilds">
                <div className="addproducttitle" >
                <p>Product Title </p>
                <input value={productdetails.name} onChange={changehandler} type="text" name="name" placeholder="enter product name"/>
                </div>

            </div>
            <div className="addproductpricefeilds">
                <div className="addproductprice" >
                <p>Old price </p>
                <input value={productdetails.oldprice} onChange={changehandler} type="text" name="oldprice" placeholder="enter old price"/>
                </div>
                <div className="addproductprice" >
                <p>Offer price </p>
                <input value={productdetails.newprice} onChange={changehandler} type="text" name="newprice" placeholder="enter new price"/>
                </div>

            </div>
            <div className="addproductcategoryupload">
                <div className="addproductcategory" >
                <p>Product Category </p>
                <select value={productdetails.category} onChange={changehandler} name="category" className="productcategory">
                    <option value="women"> women</option>
                    <option value="men"> men</option>
                    <option value="kid"> kid</option>
                </select>
                </div>
                <div className="addimage">
                    <p>Add Image</p>
            <label htmlFor="fileinput">
                <img   className = "uploadinmage" src={image? URL.createObjectURL(image):upload} alt="upload"/>
            </label>
            <input onChange={uploadinmage} type="file" name="image" id="fileinput" hidden/>
            </div>
            </div>
            <button onClick={handleAddproduct}>Add</button>
        </div>
    )
}
export default Addproduct