import React from 'react'
import { flashSaleService } from '../feature/home.service'

const FlashSale = async () => {
  const products = await flashSaleService()

  console.log('result', products)
  return (
    <div className="flashsale">
      <div className="flashsale-container">
        <div className="flashsale-header">
          <div className="flashsale-timer">
            Sale Ends in: <div>01:41:17</div>
          </div>
          <div>View all</div>
        </div>
        <div className="flashsale-products">
          {products?.map((product) => (
            <div className="flashsale-product" key={product?.id}>
              <figure>
                <img src={product?.image} alt="" />
              </figure>
              <div>
                <p>{product?.title}</p>
                <p>{product?.sale_price}</p>
                <p>{product?.price}</p>
                <span>10%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FlashSale
