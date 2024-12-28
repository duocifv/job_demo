'use client'
import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'

const FooterItem = (p) => {
  const itemRef = useRef<HTMLUListElement>(null)
  const [on, setOn] = useState(false)
  const [height, setHeight] = useState(null)
  useEffect(() => {
    setHeight(itemRef.current.clientHeight)
  }, [])
  return (
    <div className="footer-group-item">
      <div className="footer-tab" onClick={() => setOn(!on)}>
        <div>{p.label}</div>
        <div>
          {on ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="18px"
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="18px"
              width="18px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
            </svg>
          )}
        </div>
      </div>
      <div>
        <ul
          className={classNames(
            'footer-item effect',
            p.className,
            !on && height ? '!h-0 -z-10 overflow-hidden' : 'z-10 relative'
          )}
          ref={itemRef}
          style={{
            opacity: !on ? 0 : 1,
            transform: `${!on ? 'translate(0, -4px)' : 'translate(0, 0)'}`,
            height: `${height}px`,
            position: height === null ? 'absolute' : 'relative',
          }}
        >
          {p.children}
        </ul>
      </div>
    </div>
  )
}

export default FooterItem
