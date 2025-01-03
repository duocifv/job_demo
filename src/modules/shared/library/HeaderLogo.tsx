'use client'
import { usePathname } from 'next/navigation'
import { FC, ReactNode } from 'react'

const HeaderLogo: FC<{ children: ReactNode }> = ({ children }) => {
  const param = usePathname()
  if (!param.includes('sanpham')) {
    return children
  }
  return <div className="hidden md:block">{children}</div>
}

export default HeaderLogo
