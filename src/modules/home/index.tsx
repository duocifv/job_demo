import React from 'react'
import HeroHome from './library/HeroHome'
import Information from '../shared/library/Information'
import './stylesheet/home.scss'
import ServiceHome from './library/ServiceHome'
import MainHome from './library/MainHome'
import Search from '../shared/library/Search'

const Home = () => {
  return (
    <div>
      <HeroHome />
      <MainHome />
      <ServiceHome />
      <Information />
      <Search />
    </div>
  )
}

export default Home
