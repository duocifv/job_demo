import Cols from '@/components/Cols'
import Picture from '@/components/Picture'
import React from 'react'

const PickupHome = () => {
  return (
    <div className='pt-6'>
      <Cols
        data={[
          <Picture
            src="https://img.dormy-hotels.com/dms-cp.com/public/media/cms_v2/2024/1107/3203/4768/241105_youtube_kyoritsu@2x.jpg?w=640&fit=inside&ext=webp"
            alt={''}
          />,
          <Picture
            src="https://img.dormy-hotels.com/dms-cp.com/public/media/cms_v2/2024/1107/3203/4768/241105_youtube_kyoritsu@2x.jpg?w=640&fit=inside&ext=webp"
            alt={''}
          />,
          <Picture
            src="https://img.dormy-hotels.com/dms-cp.com/public/media/cms_v2/2024/1107/3203/4768/241105_youtube_kyoritsu@2x.jpg?w=640&fit=inside&ext=webp"
            alt={''}
          />,
        ]}
        className="gap-2 w-[800px] text-lg mb-4"
      />
    </div>
  )
}

export default PickupHome
