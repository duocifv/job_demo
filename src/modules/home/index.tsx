import React from 'react'
import HeroHome from './library/HeroHome'
import './stylesheet/home.scss'
import FlashSale from './library/FlashSale'
import BestSellingProducts from './library/BestSellingProducts'
import FeaturedProducts from './library/FeaturedProducts'
import RecentProducts from './library/RecentProducts'
import StickyFooter from '../shared/library/StickyFooter'

const Home = () => {
  return (
    <div>
      <HeroHome />
      <FlashSale />
      <FeaturedProducts />
      <BestSellingProducts />
      <RecentProducts />
      <StickyFooter />
    </div>
  )
}

export default Home
