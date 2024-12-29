'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'

const HeadStickyMobile = ({ children }: { children: ReactNode }) => {
  const [isSticky, setIsSticky] = useState<number>(0)
  const stickyRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const scrollPosition = window.scrollY
        if (scrollPosition > 51) {
          setIsSticky(51)
        }
        if (scrollPosition < 52) {
          setIsSticky(0)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`head-sticky effect`}
      style={{ top: `${isSticky ? `-${isSticky}px` : '0'}` }}
      ref={stickyRef}
    >
      {children}
    </div>
  )
}

export default HeadStickyMobile
