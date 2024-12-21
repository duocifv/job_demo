import ProductCard from '@/modules/shared/library/ProductCard'
import React from 'react'
import ProductsCarousel from '../../shared/library/ProductsCarousel'
import TitleProduct from './TitleProduct'

// Dữ liệu mẫu cho 4 sản phẩm
const products = [
  {
    id: 1,
    title: 'Guốc Nữ Cao Gót Hermes Oasis - Thanh Lịch, Đẳng Cấp | Dony Shop',
    price: '467400',
    sale_price: '1558000',
    image:
      'https://product.hstatic.net/200000657377/product/product-dony-_3_9974a5d51f40460f99f9bc2c596d2c82_master.jpg',
  },
  {
    id: 2,
    title:
      'Giày Hở Gót Hoka Ora Recovery Mules - Thoải Mái, Phục Hồi Hiệu Quả | Dony Shop',
    price: '495000',
    sale_price: '1650000',
    image:
      'https://product.hstatic.net/200000657377/product/2_6133571cb72447d58cbbd122b0a56503_master.jpg',
  },
  {
    id: 3,
    title:
      'Giày Thể Thao Onitsuka Tiger - Phong Cách Cổ Điển, Hiện Đại | Dony Shop',
    price: '701250',
    sale_price: '2337500',
    image:
      'https://product.hstatic.net/200000657377/product/3_77e396537efb498780ad8b5017fcf5a4_master.jpg',
  },
  {
    id: 4,
    title: 'Giày Thể Thao Adidas Spezial - Cổ Điển, Tinh Tế | Dony Shop',
    price: '660000',
    sale_price: '2200000',
    image:
      'https://product.hstatic.net/200000657377/product/1_49b9827b142b4d31b320f426977afd3e_master.jpg',
  },
  {
    id: 5,
    title: 'Dép nữ Christian Dior Dway Slide - Sang trọng, đẳng cấp, tinh tế',
    price: '605100',
    sale_price: '2017000',
    image:
      'https://product.hstatic.net/200000657377/product/product-dony-_1__bd766fb2621e4945b835d289057c75bd_master.jpg',
  },
  {
    id: 6,
    title:
      'Dép Nike Calm Slide - Thiết kế tối giản, tinh tế, phù hợp với mọi outfit',
    price: '288750',
    sale_price: '962500',
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

// Component chính hiển thị danh sách sản phẩm
const BestSellingProducts = () => {
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

export default BestSellingProducts
