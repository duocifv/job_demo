import React from 'react'

const TiktokSvg = ({ size = 24, color = '#FFF', className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18.895 6.74A3.245 3.245 0 0115.653 3.5a.499.499 0 00-.5-.499h-2.672a.499.499 0 00-.499.499v10.953c0 1.05-.855 1.906-1.906 1.906a1.908 1.908 0 01-1.906-1.906c0-1.05.855-1.905 1.906-1.905a.499.499 0 00.5-.5v-2.67a.499.499 0 00-.5-.5A5.582 5.582 0 004.5 14.452a5.582 5.582 0 005.576 5.575c3.075 0 5.577-2.5 5.577-5.575V9.604c.993.53 2.098.805 3.242.805a.499.499 0 00.499-.498V7.239a.499.499 0 00-.5-.499z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  )
}

export default TiktokSvg
