import Cols from '@/components/Cols'
import Picture from '@/components/Picture'
import React from 'react'

const GalleryHome = () => {
  return (
    <div>
      <h2 className='text-2xl text-center mb-2'>Gallery</h2>
      <Cols
        className="w-[800px]"
        data={[
          <Picture
            src="https://img.dormy-hotels.com/resort/files/images/home/img_gal1.webp"
            alt={''}
          />,
          <Picture
          src="https://img.dormy-hotels.com/resort/files/images/home/img_gal2.webp"
          alt={''}
        />,
        <Picture
        src="https://img.dormy-hotels.com/resort/files/images/home/img_gal3.webp"
        alt={''}
      />,
        ]}
      />
    </div>
  )
}

export default GalleryHome
