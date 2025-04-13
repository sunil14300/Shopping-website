import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import { allProducts } from '../../data'
import Footer from '../../components/footer/Footer'

const Allproduct = () => {
  return (
    <div>
      <Navbar/>
      <Products heading="Products" items={allProducts}/>
      <Footer/>
    </div>
  )
}

export default Allproduct
