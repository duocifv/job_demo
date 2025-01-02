'use client'
import { usePathname } from 'next/navigation'
import { FC, ReactNode } from 'react'

const HeaderLogo: FC<{ children: ReactNode }> = ({ children }) => {
  const param = usePathname()
  console.log('param', param)
  if (!param.includes('sanpham')) {
    return children
  }
  return null
}

export default HeaderLogo
