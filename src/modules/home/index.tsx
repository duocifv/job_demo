import React from 'react'
import HeroHome from './library/HeroHome'
import News from '../shared/library/News'
import Pickup from '../shared/library/Pickup'
import ServiceHome from './library/ServiceHome'
import GalleryHome from './library/GalleryHome'
import Information from '../shared/library/Information'
import FeatureHome from './library/FeatureHome'

const Home = () => {
  return (
    <div>
      <HeroHome />
      <News />
      <Pickup />
      <FeatureHome />
      <ServiceHome />
      <Information />
      <News />
      <Pickup />
      <GalleryHome />
    </div>
  )
}

export default Home
