import { Button, ButtonGroup } from '@/components/Button'
import InnerHTML from '@/components/InnerHTML'
import { formatPrice } from '@/utils/formatPrice'
import React from 'react'

const ProductCard = (p) => {
  return (
    <div className="product" key={p.product?.id}>
      <div className="product-box">
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
        </div>
        <ButtonGroup>
          <Button copy="Mua ngay" />
          <Button copy="Thêm giỏ hàng" variant="light" />
        </ButtonGroup>
      </div>
    </div>
  )
}

export default ProductCard
