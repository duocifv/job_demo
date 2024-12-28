import Link from 'next/link'
import React, { FC } from 'react'

const TitleProduct: FC<{
  copy: string
  href: string
}> = (p) => {
  return (
    <div className="column-between home-container">
      <h2 className="text-base md:text-2xl font-bold tracking-tight text-dark">{p?.copy}</h2>
      <Link className='text-sm md:text-base inline-flex items-center hidden md:block' href={p?.href}>Xem tất cả</Link>
    </div>
  )
}

export default TitleProduct
