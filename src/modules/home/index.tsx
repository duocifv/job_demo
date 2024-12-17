import React from 'react'
import HeroHome from './library/HeroHome'
import './stylesheet/home.scss'
import FlashSale from './library/FlashSale'
import BestSellingProducts from './library/BestSellingProducts'
import FeaturedProducts from './library/FeaturedProducts'
import RecentProducts from './library/RecentProducts'

const Home = () => {
  return (
    <div>
      <HeroHome />
      <FlashSale />
      <FeaturedProducts />
      <BestSellingProducts />
      <RecentProducts />
    </div>
  )
}

export default Home
