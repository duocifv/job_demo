import InnerHTML from '@/components/InnerHTML'
import { formatPrice } from '@/utils/formatPrice'
import React from 'react'

const ProductCard = (p) => {
  return (
    <div className="product" key={p.product?.id}>
      <figure className="product-thumb">
        <img src={p.product?.image} alt="" />
      </figure>
      <div className="product-info">
        <InnerHTML className="product-name" node={p.product?.title} />
        <InnerHTML
          className="product-sale"
          node={formatPrice(p.product?.price)}
        />
        <InnerHTML
          className="product-price-first"
          node={formatPrice(p.product?.sale_price)}
        />
        <span>10%</span>
      </div>
    </div>
  )
}

export default ProductCard
