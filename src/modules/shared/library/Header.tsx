import Image from 'next/image'
import HeadStickyMobile from './HeadStickyMobile'

import Search from './Search'
import dynamic from 'next/dynamic'
import HeaderTop from './HeaderTop'
import Picture from '@/components/Picture'

const PopoverAuth = dynamic(() =>
  import('./Popover').then((mod) => mod.PopoverAuth)
)
const PopoverCart = dynamic(() =>
  import('./Popover').then((mod) => mod.PopoverCart)
)
const PopoverStores = dynamic(() =>
  import('./Popover').then((mod) => mod.PopoverStores)
)

const Header = () => {
  return (
    <header className="head">
      <HeaderTop />
      <HeadStickyMobile />
      <div className="head-group">
        <div className="head-container">
          <nav className="head-nav">
            <div className="head-logo">
              <figure>
                <Picture
                  src="/logo.png"
                  width={145}
                  height={68}
                  loading="eager"
                  className="head-symbol"
                  alt="donyshop"
                />
              </figure>
              <h1 className="head-dony">DONY</h1>
            </div>
              <div className="w-full p-1 border border-white hidden md:flex">
                <div className="flex items-center head-boxs">
                  <button className="head-menu-mobile">
                    <svg
                      className="head-icon-size"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="32px"
                      width="32px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </button>
                  <Search />
                </div>
                <div className="head-columns">
                  <div className="head-group-items">
                    <div className="head-items head-stores">
                      <div>
                        <svg
                          className="head-icon-size"
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="32px"
                          width="32px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M464 448V267.85a104.76 104.76 0 0 1-33.56 6.58c-1.18 0-2.3.05-3.4.05a108 108 0 0 1-56.86-16 108 108 0 0 1-56.85 16 106.16 106.16 0 0 1-56.51-16.2 107.84 107.84 0 0 1-57.2 16.2 106.14 106.14 0 0 1-56.85-16.42 106.14 106.14 0 0 1-56.85 16.42c-1.09 0-2.19 0-3.37-.05h-.06A104.66 104.66 0 0 1 48 267.49V448H16v32h480v-32zm-240-64h-96v-76a4 4 0 0 1 4-4h88a4 4 0 0 1 4 4zm160 64h-80V308a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4zm108.57-277.72L445.89 64C432 32 432 32 400 32H112c-32 0-32 0-45.94 32L19.38 170.28c-9 19.41 2.89 39.34 2.9 39.35l.41.66c.42.66 1.13 1.75 1.62 2.37.1.13.19.27.28.4l5.24 6.39 5.31 5.14.42.36a69.65 69.65 0 0 0 9.44 6.78v.05a74 74 0 0 0 36 10.67h2.47a76.08 76.08 0 0 0 51.89-20.31 72.38 72.38 0 0 0 5.77-6 74.18 74.18 0 0 0 5.78 6 76.08 76.08 0 0 0 51.89 20.31c23.28 0 44.07-10 57.63-25.56a.11.11 0 0 1 .15 0l5.66 5.26a76.09 76.09 0 0 0 51.9 20.31c23.29 0 44.11-10 57.66-25.61 13.56 15.61 34.37 25.61 57.67 25.61h2.49a71.35 71.35 0 0 0 35-10.7c.95-.57 1.86-1.17 2.78-1.77A71.33 71.33 0 0 0 488 212.17l2-3c.9-2.04 11.21-20.3 2.57-38.89z"></path>
                        </svg>
                      </div>
                      <p className="head-copy">
                        <span className="head-name">Cửa hàng</span>
                        <span className="head-note">về thông tin DonyShop</span>
                      </p>
                    </div>

                    <div className="head-items-popover">
                      <PopoverStores />
                    </div>
                  </div>
                  <div className="head-group-items">
                    <div className="head-items head-auth">
                      <div>
                        <svg
                          className="head-icon-size"
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="32px"
                          width="32px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 11C13.3807 11 14.5 9.88071 14.5 8.5C14.5 7.11929 13.3807 6 12 6C10.6193 6 9.5 7.11929 9.5 8.5C9.5 9.88071 10.6193 11 12 11ZM7.52746 16H16.4725C16.2238 13.75 14.3163 12 12 12C9.68372 12 7.77619 13.75 7.52746 16Z"></path>
                        </svg>
                      </div>
                      <p className="head-copy">
                        <span className="head-name">Đăng nhập</span>
                        <span className="head-note">để nhận mã ưu đãi</span>
                      </p>
                    </div>
                    <div className="head-items-popover">
                      <PopoverAuth />
                    </div>
                  </div>
                  <div className="head-group-items">
                    <div className="head-items head-cart">
                      <div>
                        <svg
                          className="head-icon-size"
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          height="32px"
                          width="32px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                        </svg>
                      </div>
                      <p className="head-copy">
                        <span className="head-name">Giỏ hàng</span>
                        <span className="head-note">Miễn phí vận chuyển</span>
                      </p>
                    </div>
                    <div className="head-items-popover">
                      <PopoverCart />
                    </div>
                  </div>
                </div>
              </div>
          </nav>
        </div>
      </div>
      <div className="head-bar">
        <div className="head-container">
          <div className="head-columns">
            <menu className="head-menu">
              <li className="head-item">Thương hiệu</li>
              <li className="head-item">Dép Nữ</li>
              <li className="head-item">Dép Nam</li>
              <li className="head-item">Trẻ em</li>
            </menu>
            <menu className="head-menu">
              <li className="head-item">Tin tức</li>
              <li className="head-item">Mới nhất</li>
              <li className="head-item">Nổi bật</li>
              <li className="head-item">Khuyến mãi & ưu đãi</li>
            </menu>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
