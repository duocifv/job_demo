import React from 'react'
import './stylesheet/product.scss'
import ProductDetailCard from './library/ProductDetailCard'
import Breadcrumb from '../shared/library/Breadcrumb'

const ProductDetail = () => {
  return (
    <div>
      <Breadcrumb />
      <ProductDetailCard />
    </div>
  )
}

export default ProductDetail
