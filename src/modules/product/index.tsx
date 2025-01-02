import React from 'react'
import './stylesheet/product.scss'
import ProductDetailCard from './library/ProductDetailCard'
import Breadcrumb from '../shared/library/Breadcrumb'
import ProductStickyFooter from './library/ProductStickyFooter'

const ProductDetail = () => {
  return (
    <div>
      <Breadcrumb />
      <ProductDetailCard />
      <ProductStickyFooter />
    </div>
  )
}

export default ProductDetail
