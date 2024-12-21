import React from 'react'
import ProductsCarousel from '../../shared/library/ProductsCarousel'
import ProductCard from '@/modules/shared/library/ProductCard'
import TitleProduct from './TitleProduct'

// Dữ liệu mẫu cho 4 sản phẩm
const products = [
  {
    id: 1,
    title:
      'Dép Sục Crocs Band Nam Nữ Siêu Nhẹ Thoáng Khí Chống Trơn Trượt Đi trong nhà, đi chơi, du lịch nhiều size, nhiều màu',
    price: '288750',
    sale_price: '962500',
    image:
      'https://product.hstatic.net/200000657377/product/product-dony-_1__28575f7fdd994719b2306fcb4ce77a55_master.jpg',
  },
  {
    id: 2,
    title:
      'Sandal Nữ Crocs Brooklyn Low Wedge siêu đẹp chắc chắn nhẹ bền thời trang đi chơi đi du lịch đi trong nhà đi làm',
    price: '412500',
    sale_price: '1375000',
    image:
      'https://product.hstatic.net/200000657377/product/product-dony-_1_32318d3bbff24720af904a6fd9886833_master.jpg',
  },
  {
    id: 3,
    title: 'Sandals Nữ Nhựa Crocs Literide 360',
    price: '350000',
    sale_price: '500,000',
    image:
      'https://product.hstatic.net/200000657377/product/product-dony-_ee_066c1a7c4b304d6e949683e8fc955156_master.jpg',
  },
  {
    id: 4,
    title:
      'Dép Nike Calm Slide - Thiết kế tối giản, tinh tế, phù hợp với mọi outfit',
    price: '288750',
    sale_price: '962500',
    image:
      'https://product.hstatic.net/200000657377/product/1_a48a71c475b94ddea7b575d904b07a06_master.jpg',
  },
  {
    id: 5,
    title: 'Dép Crocs Geometrics Slide - Thoải Mái, Cá Tính | Dony Shop',
    price: '580000',
    sale_price: '750000',
    image:
      'https://product.hstatic.net/200000657377/product/1_5e74ac6d6e0e4aa982002655301190de_master.jpg',
  },
  {
    id: 6,
    title:
      'Dép Nike Calm Slide - Thiết kế tối giản, tinh tế, phù hợp với mọi outfit',
    price: '1050000',
    sale_price: '1,500,000 đ',
    image:
      'https://product.hstatic.net/200000657377/product/1_a48a71c475b94ddea7b575d904b07a06_master.jpg',
  },
  {
    id: 7,
    title: 'Dép Nữ Hermes Chypre - Sang Trọng, Thời Thượng',
    price: '660000',
    sale_price: '2200000',
    image:
      'https://product.hstatic.net/200000657377/product/product-dony-_1__18b1a264b6f548e89882f426f6ed1e9a_master.jpg',
  },
  {
    id: 8,
    title:
      'Dép Crocs Literide Slide - mang đến cảm giác êm ái, nhẹ nhàng như đang đi trên mây',
    price: '330000',
    sale_price: '1100000',
    image:
      'https://product.hstatic.net/200000657377/product/1_24157cb6a7f04ba5abad0df36b67b2f1_master.jpg',
  },
]

const FeaturedProducts = () => {
  return (
    <div className="container mx-auto">
      <TitleProduct copy="Hàng Mới Về" href="/view-more" />
      <ProductsCarousel>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsCarousel>
    </div>
  )
}

export default FeaturedProducts
