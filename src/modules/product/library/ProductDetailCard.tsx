'use client'
import { Button } from '@/components/Button'
import Picture from '@/components/Picture'
import React, { useState } from 'react'
import ProductDetailSelect from './ProductDetailSelect'
import ProductShoppingCart from './ProductShoppingCart'
import ProductDetailCheckout from './ProductDetailCheckout'
import ProductSimilaritems from './ProductSimilaritems'
import ProductDetailInfor from './ProductDetailInfor'

const features = [
  {
    name: 'Cam kết chất lượng',
    description: 'Cam kết sản phẩm đúng chất lượng',
  },
  { name: 'Bảo hành', description: 'Bảo hành 3 tới 6 tháng' },
  {
    name: 'Kiểm tra hàng',
    description: 'Được kiểm tra hàng trước khi nhận & thanh toán',
  },
]

const ProductDetailCard = () => {
  const [openCart, setOpenCart] = useState(false)
  const [openCheckout, setOpenCheckout] = useState(false)
  return (
    <>
      <div className="product">
        <div className="product-detail-container" id="modalBox">
          <div className="product-detail-scarousel column-between">
            <div className="md:max-w-[68%]">
              <div className="product-detail-scarousel-items column-start !flex-col-reverse md:flex-row">
                <div className="columns-start !flex-row">
                  <div className="product-detail-scarousel-item">
                    <Picture
                      src="https://product.hstatic.net/200000657377/product/6_52bd5cc24e2d48128bd3186d98794757_master.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-detail-scarousel-item">
                    <Picture
                      src="https://product.hstatic.net/200000657377/product/4_7cfdd0d52883464f8546e450d6f1ed5a_compact.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-detail-scarousel-item">
                    <Picture
                      src="https://product.hstatic.net/200000657377/product/5_d2f2483593b74e388742e4c781d672d3_compact.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-detail-scarousel-item">
                    <Picture
                      src="https://product.hstatic.net/200000657377/product/1_49b9827b142b4d31b320f426977afd3e_compact.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-detail-scarousel-item">
                    <Picture
                      src="https://product.hstatic.net/200000657377/product/2_fef00d4479334e688fbbc72b140c9f54_compact.jpg"
                      alt=""
                    />
                  </div>
                  <div className="product-detail-scarousel-item">
                    <Picture
                      src="https://product.hstatic.net/200000657377/product/3_8e57e1aeeb8b486d983f355a4f7813ed_compact.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="product-detail-scarousel-thumb">
                  <Picture
                    width={600}
                    height={600}
                    src="https://product.hstatic.net/200000657377/product/6_52bd5cc24e2d48128bd3186d98794757_master.jpg"
                    alt=""
                  />
                </div>
              </div>
              <ProductSimilaritems />
            </div>
            <div className="product-detail">
              <div className="columns-between column-scroll">
                <div className="product-detail-info">
                  <div className="product-detail-name">
                    Giày Thể Thao Adidas Spezial - Cổ Điển, Tinh Tế | Dony Shop
                  </div>
                  <div className="product-detail-price">660,000 VNĐ</div>
                  <div className="product-detail-sale">
                    Giá gốc: 2,200,000 VNĐ
                    <span className="text-primary"> (giảm 70%)</span>
                  </div>
                  <div className="product-detail-state mb-4">
                    Tình trạng: <b>Còn hàng</b>
                  </div>

                  <ProductDetailSelect />
                  <div className="product-detail-description">
                    ※ The product does not include restrooms, please take care
                    of your needs before boarding.
                  </div>
                  <Button
                    size="medium"
                    variant="primary"
                    copy="Mua ngay"
                    className="mt-4"
                    onClick={() => setOpenCheckout(true)}
                  />
                  <Button
                    size="medium"
                    variant="primary-outline"
                    copy="Thêm vào giỏ hàng"
                    className="mt-4"
                    onClick={() => setOpenCart(true)}
                  />
                </div>
              </div>
              <dl className="mt-16 ">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4 pb-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      {openCart && <ProductShoppingCart setOpenCart={setOpenCart} />}
      {openCheckout && (
        <ProductDetailCheckout
          openCheckout={openCheckout}
          setOpenCheckout={setOpenCheckout}
        />
      )}
      <ProductDetailInfor />
    </>
  )
}

export default ProductDetailCard
