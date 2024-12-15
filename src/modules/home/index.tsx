import React from 'react'
import HeroHome from './library/HeroHome'
import './stylesheet/home.scss'
import FlashSale from './library/FlashSale'

const Home = () => {
  return (
    <div>
      <HeroHome />
      <FlashSale/>
    </div>
  )
}

export default Home
