import InnerHTML from '@/components/InnerHTML'
import Picture from '@/components/Picture'
import { formatPrice } from '@/utils/formatPrice'
import classNames from 'classnames'
import Link from 'next/link'

const ProductCard = (p) => {
  return (
    <div className={classNames('product', p.className)} key={p.product?.id}>
      <Link href="/loai/sanpham">
        <div className="product-box columns-between">
          <div className="product-thumb">
            <figure className="product-photo">
              <Picture src={p.product?.image} alt="" />
            </figure>
            <div className='product-thumb-info'>
              <InnerHTML className="product-name" node={p.product?.title} />
              <Price {...p} className="md:hidden"/>
            </div>
          </div>
          <Price {...p} className="hidden md:block"/>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard

const Price = (p) => (
  <div className={classNames("product-info", p.className)}>
    <InnerHTML
      className={"product-sale mt-1"}
      node={formatPrice(p.product?.price)}
    />
    <InnerHTML
      className="product-price-first"
      node={formatPrice(p.product?.sale_price)}
    />
  </div>
)
