'use client'
import React, { useEffect, useState } from 'react'

const Search = () => {
  const [on, setON] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <button className="head-search" onClick={() => setON(!on)}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="18px"
          width="18px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"></path>
        </svg>
        <span className="head-search-icon">
          Tìm kiếm giày dép, thương hiệu...
        </span>
      </button>
      {mounted && (
        <div className={`modal ${on ? 'on' : ''}`}>
          <div className="search">
            <div className="search-title">
              <div>
                <span className="search-badge">
                  <input type="checkbox" name="search" />
                  <b>Tìm Dép Nam</b>
                </span>
                <span className="search-badge">
                  <input type="checkbox" name="search" />
                  <b>Tìm Dép Nữ</b>
                </span>
                <span className="search-badge">
                  {' '}
                  <input type="checkbox" name="search" /> <b>Tìm thương hiệu</b>
                </span>
              </div>
              <button className="search-close" onClick={() => setON(!on)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="32px"
                  width="32px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256z"></path>
                </svg>
              </button>
            </div>
            <div className="search-cell">
              <input
                type="text"
                className="search-input"
                placeholder="nhập từ khóa cần tìm"
              />
              <span className="search-input-first" />
              <span className="search-submit">
                <svg
                  data-testid="geist-icon"
                  height="16"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5 3V2.25H15V3V10C15 10.5523 14.5523 11 14 11H3.56068L5.53035 12.9697L6.06068 13.5L5.00002 14.5607L4.46969 14.0303L1.39647 10.9571C1.00595 10.5666 1.00595 9.93342 1.39647 9.54289L4.46969 6.46967L5.00002 5.93934L6.06068 7L5.53035 7.53033L3.56068 9.5H13.5V3Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
            <hr className="search-line" />
            <div className="search-panel">
              <p>Gợi ý</p>
              <div>
                <ul>
                  <li>
                    <span className="search-badge keyword">
                      DonyShop là gì?
                    </span>
                  </li>
                  <li>
                    <span className="search-badge keyword">
                      Làm thế nào để liên hệ với DonyShop?
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Search
