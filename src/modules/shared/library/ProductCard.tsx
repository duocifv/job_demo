import { Button, ButtonGroup } from '@/components/Button'
import InnerHTML from '@/components/InnerHTML'
import Picture from '@/components/Picture'
import { formatPrice } from '@/utils/formatPrice'
import classNames from 'classnames'
import Link from 'next/link'

/**
 * ProductCard component renders a product card with details like title, price, sale price, and image.
 * It also provides buttons to buy the product or add it to the cart.
 *
 * @component
 * @example
 * const product = {
 *   id: 1,
 *   title: 'Product Title',
 *   image: 'image_url',
 *   price: 1000,
 *   sale_price: 800
 * };
 *
 * <ProductCard product={product} className="custom-class" />
 */

const ProductCard = (p) => {
  return (
    <div className={classNames('product', p.className)} key={p.product?.id}>
      <Link href="/loai/sanpham">
        <div className="product-box columns-between">
          <figure className="product-thumb">
            <Picture src={p.product?.image} alt="" />
            <figcaption>
              <InnerHTML className="product-name" node={p.product?.title} />
            </figcaption>
          </figure>
          <div className="product-info">
            <InnerHTML
              className="product-sale mt-1"
              node={formatPrice(p.product?.price)}
            />
            <InnerHTML
              className="product-price-first"
              node={formatPrice(p.product?.sale_price)}
            />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
