import React from 'react'
import HeroHome from './library/HeroHome'
import './stylesheet/home.scss'
import FlashSale from './library/FlashSale'
import BestSellingProducts from './library/BestSellingProducts'

const Home = () => {
  return (
    <div>
      <HeroHome />
      <FlashSale />
      <BestSellingProducts />
    </div>
  )
}

export default Home
