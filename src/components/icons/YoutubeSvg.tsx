import React from 'react'

const YoutubeSvg = ({ size = 24, color = '#FEFEFE', className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="nonzero">
        <path
          d="M20.82 7.412s-.176-1.322-.715-1.905c-.685-.764-1.452-.768-1.804-.813-2.519-.194-6.297-.194-6.297-.194h-.008s-3.778 0-6.297.194c-.352.045-1.119.049-1.804.813-.54.583-.715 1.905-.715 1.905S3 8.966 3 10.52v1.456c0 1.553.18 3.107.18 3.107s.176 1.322.715 1.905c.685.764 1.584.74 1.985.82C7.32 17.954 12 18 12 18s3.782-.006 6.301-.2c.352-.045 1.12-.049 1.804-.813.54-.583.715-1.905.715-1.905s.18-1.554.18-3.107V10.52c0-1.553-.18-3.107-.18-3.107z"
          fill={color}
        />
        <path
          d="M10.37 13.5a.6.6 0 01-.31-.088.666.666 0 01-.31-.568V8.906c0-.234.118-.45.31-.568a.593.593 0 01.619-.002l3.258 1.97a.664.664 0 01.313.569c0 .235-.12.453-.313.57l-3.258 1.969a.6.6 0 01-.308.086z"
          fill="black"
        />
      </g>
    </svg>
  )
}

export default YoutubeSvg
