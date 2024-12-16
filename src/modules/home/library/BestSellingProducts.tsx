import ProductCard from '@/modules/shared/library/ProductCard'
import React from 'react'
import ProductsCarousel from './ProductsCarousel'

// Dữ liệu mẫu cho 4 sản phẩm
const products = [
  {
    id: 1,
    title: 'Giày thể thao nam',
    price: '880500',
    sale_price: '1,200,000 đ',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Giày nữ cao cấp',
    price: '1050000',
    sale_price: '1,500,000 đ',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Dép thời trang',
    price: '350000',
    sale_price: '500,000',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Sandal đi biển',
    price: '580000',
    sale_price: '750000',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Sandal đi biển',
    price: '580000',
    sale_price: '750000',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Giày nữ cao cấp',
    price: '1050000',
    sale_price: '1,500,000 đ',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'Dép thời trang',
    price: '350000',
    sale_price: '500,000',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    title: 'Sandal đi biển',
    price: '580000',
    sale_price: '750000',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    title: 'Sandal đi biển',
    price: '580000',
    sale_price: '750000',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    title: 'Sandal đi biển',
    price: '580000',
    sale_price: '750000',
    image: 'https://via.placeholder.com/150',
  },
]

// Component chính hiển thị danh sách sản phẩm
const BestSellingProducts = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">
        Sản phẩm bán chạy nhất
      </h2>
      <div className="products">
        <ProductsCarousel>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsCarousel>
      </div>
    </div>
  )
}

export default BestSellingProducts
