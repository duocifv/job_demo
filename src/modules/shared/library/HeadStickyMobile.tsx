'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react'

const HeadStickyMobile = ({ children }: { children: ReactNode }) => {
  const [isSticky, setIsSticky] = useState(false)
  const stickyRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const scrollPosition = window.scrollY

        if (scrollPosition > 35) {
          console.log(scrollPosition)
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, [])
  return (
    <div
      className={`head-sticky`}
      style={{ top: `${isSticky ? '-51px' : '0'}` }}
      ref={stickyRef}
    >
      {children}
    </div>
  )
}

export default HeadStickyMobile
