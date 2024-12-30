import React from 'react'
import Picture from '@/components/Picture'

const HeaderTop = () => {
  return (
    <div className="head-box">
      <div className="head-container">
        <div className="head-top">
          <div className="head-text-group">
            <span className="head-text-sample">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9 1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
              </svg>
            </span>
            <span className="head-text-medium"> Miễn phí vận chuyển </span>
            <span className="head-text-big">TOÀN BỘ ĐƠN HÀNG</span>
            <span className="head-text-sample"> bất kể giá trị.</span>
          </div>
        </div>
        <div className="head-mark">
          <span className="head-shoesbg" />
        </div>
        <div className="head-shoes">
          <Picture src="/shoes.svg" alt="" width={42} />
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
