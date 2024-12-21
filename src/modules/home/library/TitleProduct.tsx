import Link from 'next/link'
import React, { FC } from 'react'

const TitleProduct: FC<{
  copy: string
  href: string
}> = (p) => {
  return (
    <div className="column-between home-container">
      <h2 className="text-2xl font-bold tracking-tight text-dark">{p?.copy}</h2>
      <Link href={p?.href}>Xem tất cả</Link>
    </div>
  )
}

export default TitleProduct
