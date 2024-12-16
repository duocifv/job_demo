import React from 'react'
import { flashSaleService } from '../feature/home.service'
import InnerHTML from '@/components/InnerHTML'
import { formatPrice } from '@/utils/formatPrice'

const FlashSale = async () => {
  const products = await flashSaleService()

  console.log('result', products)
  return (
    <div className="flashsale bg-foreground container">
      <div className="flashsale-container">
        <div className="flashsale-header">
          <div className="flashsale-copy">
            <p className="flashsale-note">CHỈ ÁP DỤNG KHI MUA HÀNG TẠI</p>
            <span className="flashsale-logo">DONYSHOP</span>
          </div>
          <div className="flashsale-box">
            <div className="flashsale-ship">
              <div className="flashsale-free">
                FREE!
                <i>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 32 32"
                    height="24px"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 0 6 L 0 8 L 19 8 L 19 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 L 4 18 L 2 18 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 21.15625 25 C 21.601563 26.71875 23.148438 28 25 28 C 26.851563 28 28.398438 26.71875 28.84375 25 L 32 25 L 32 16.84375 L 31.9375 16.6875 L 29.9375 10.6875 L 29.71875 10 L 21 10 L 21 6 Z M 1 10 L 1 12 L 10 12 L 10 10 Z M 21 12 L 28.28125 12 L 30 17.125 L 30 23 L 28.84375 23 C 28.398438 21.28125 26.851563 20 25 20 C 23.148438 20 21.601563 21.28125 21.15625 23 L 21 23 Z M 2 14 L 2 16 L 8 16 L 8 14 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 25 22 C 26.117188 22 27 22.882813 27 24 C 27 25.117188 26.117188 26 25 26 C 23.882813 26 23 25.117188 23 24 C 23 22.882813 23.882813 22 25 22 Z"></path>
                  </svg>
                </i>
              </div>
              <div>SHIPPING Toàn quốc</div>
            </div>
            <div className="flashsale-timer">
              <p className="flashsale-timer-label">
                16/12<span>Đang diễn ra</span>
              </p>
              <div className="flashsale-label">
                <span className="flashsale-label-text">Kết thúc trong</span>
                <code className="flashsale-timer-code">
                  <i className="flashsale-icon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="24px"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32z"></path>
                    </svg>
                  </i>
                  01:41:17
                </code>
              </div>
            </div>
            <div className="flashsale-timer">
              <p className="flashsale-timer-label">
                17/12<span>Sắp diễn ra</span>
              </p>
            </div>
            <div className="flashsale-timer">
              <p className="flashsale-timer-label">
                18/12<span>Sắp diễn ra</span>
              </p>
            </div>
            <div className="flashsale-timer">
              <p className="flashsale-timer-label">
                19/12<span>Sắp diễn ra</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flashsale-products">
          {products?.map((product) => (
            <div className="product" key={product?.id}>
              <figure className="product-thumb">
                <img src={product?.image} alt="" />
              </figure>
              <div className="product-info">
                <InnerHTML className="product-name" node={product?.title} />
                <InnerHTML
                  className="product-sale"
                  node={formatPrice(product?.sale_price)}
                />
                <InnerHTML
                  className="product-price-first"
                  node={formatPrice(product?.sale_price)}
                />
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
