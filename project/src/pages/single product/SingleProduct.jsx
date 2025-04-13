import React, { useState } from 'react'
import "./SingleProduct.css"
import { useParams } from 'react-router-dom'
import { allProducts } from '../../data'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {useDispatch} from 'react-redux';
import { addToCart } from '../../redux/Cartslice'


const SingleProduct = () => {

  const dispatch=useDispatch()
  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
  }

    const {id} =useParams()
    const product=allProducts.find((product)=>product.id===parseInt(id));

    const colors=["red","purple","teal","green","black"]

    const [selectedColor,setSelectedColor]=useState(null);
    const handleCircleClick=(color)=>{
        setSelectedColor(color);
    }
    const sizes=["xs","s","m","l","xl"]
    const[selectedSize,setSelectedsize]=useState(null);
    const handlesizeClick=(size)=>{
        setSelectedsize(size);
        }

  return (
    <div className='singleProduct-container'>
      <Navbar/>
      <div className="singleProduct-wrapper">
      <div className="singleProduct-imageSection">
        <img src={product.img} alt="" className='singleProduct-image'/>
      </div>
      <div className="singleProduct-infoSection">
       <h2 className='singleProduct-title'>{product.title}</h2>
       <p className='singleProduct-number'>${product.price}</p>
       <h4 className='description-title'>Description</h4>
       <p className='singleProduct-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, unde inventore at nisi porro recusandae voluptatum quis doloribus repellat tenetur.</p>
       <div className='singleProduct-options'>
        <div className="colors-section">
            <h4>Colors</h4>
            <div className="colors">
            {colors.map((color)=>(
                <div key={color} className='color-circle' style={{backgroundColor:color, outline:selectedColor===color?`3px solid ${color}`:""}} onClick={()=>handleCircleClick(color)}>{}</div>
            ))}
            </div>
        </div>
        <div className="sizes-section">
            <h4>Size</h4>
            <div className="sizes">
                {sizes.map((size)=>(
                    <span key={size} style={{border:selectedSize===size?"1px solid #ccc":""}} onClick={()=>handlesizeClick(size)}>{size}</span>
                ))}
            </div>
        </div>
       </div>
       <div className='addToCart'>
        <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
       </div>
      </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default SingleProduct
