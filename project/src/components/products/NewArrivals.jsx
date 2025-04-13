import React from 'react'
import Products from './Products'
import { newArrivals } from '../../data'


const NewArrivals = () => {
  return (
    <div>
    <Products items={newArrivals} heading="New Arrivals"/>
    </div>
  )
}

export default NewArrivals
