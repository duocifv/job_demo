import ProductCard from '@/modules/shared/library/ProductCard'
import React from 'react'
import ProductsCarousel from '../../shared/library/ProductsCarousel'
import TitleProduct from './TitleProduct'

// Dữ liệu mẫu cho 4 sản phẩm
const products = [
  {
    id: 1,
    title: 'Dép nữ Crocs Platform Classic đế cao, chống trơn trượt',
    price: '371,250',
    sale_price: '1,237,500',
    image:
      'https://product.hstatic.net/200000657377/product/bb_f10a27cf99ec4d0fbab3b4d3acae884a_master.jpg',
  },
  {
    id: 2,
    title: 'Dép nữ Crocs Swiftwater mềm mại, ôm chân, êm ái suốt cả ngày',
    price: '272250',
    sale_price: '907500',
    image:
      'https://product.hstatic.net/200000657377/product/product-dony-_15_c98f738f123044a0b437654e810b5ee3_master.jpg',
  },
  {
    id: 3,
    title:
      'Dép Sục Crocs Band Nam Nữ Siêu Nhẹ Thoáng Khí Chống Trơn Trượt Đi trong nhà, đi chơi, du lịch nhiều size, nhiều màu',
    price: '288750',
    sale_price: '962500',
    image:
      'https://product.hstatic.net/200000657377/product/product-dony-_1__28575f7fdd994719b2306fcb4ce77a55_master.jpg',
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
      'Dép Sục Crocs Band Nam Nữ Siêu Nhẹ Thoáng Khí Chống Trơn Trượt Đi trong nhà, đi chơi, du lịch nhiều size, nhiều màu',
    price: '288750',
    sale_price: '962500',
    image:
      'https://product.hstatic.net/200000657377/product/product-dony-_1__28575f7fdd994719b2306fcb4ce77a55_master.jpg',
  },
  {
    id: 7,
    title:
      'Sandal Nữ Crocs Brooklyn Low Wedge siêu đẹp chắc chắn nhẹ bền thời trang đi chơi đi du lịch đi trong nhà đi làm',
    price: '412500',
    sale_price: '1375000',
    image:
      'https://product.hstatic.net/200000657377/product/product-dony-_1_32318d3bbff24720af904a6fd9886833_master.jpg',
  },
  {
    id: 8,
    title: 'Sandals Nữ Nhựa Crocs Literide 360',
    price: '350000',
    sale_price: '500,000',
    image:
      'https://product.hstatic.net/200000657377/product/product-dony-_ee_066c1a7c4b304d6e949683e8fc955156_master.jpg',
  },
]

// Component chính hiển thị danh sách sản phẩm
const RecentProducts = () => {
  return (
    <div className="md:max-w-[946px] lg:max-w-full md:pr-4 mx-auto">
      <TitleProduct copy="Sản phẩm mới" href="/view-more" />
      <ProductsCarousel>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsCarousel>
    </div>
  )
}

export default RecentProducts
