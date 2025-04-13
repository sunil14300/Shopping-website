import React from 'react'
import Products from './Products'
import { bestsellers } from '../../data'

const Bestsellers = () => {
  return (
    <div>
      <Products items={bestsellers} heading="Bestsellers"/>
    </div>
  )
}

export default Bestsellers;
