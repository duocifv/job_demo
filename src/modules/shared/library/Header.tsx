import HeadStickyMobile from './HeadStickyMobile'
import Search from './Search'
import dynamic from 'next/dynamic'
import HeaderTop from './HeaderTop'
import Picture from '@/components/Picture'
import ShopSvg from '@/components/icons/ShopSvg'
import CartSvg from '@/components/icons/CartSvg'
import LoginSvg from '@/components/icons/LoginSvg'
import HeaderLogo from './HeaderLogo'

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
      <div className="head-group md:px-0">
        <div className="head-container">
          <nav className="head-nav p-0 md:px-0 flex justify-between w-full">
            <HeaderLogo>
              <div className="head-logo py-2">
                <figure>
                  <Picture
                    src="/logo.png"
                    width={145}
                    height={68}
                    loading="eager"
                    className="head-symbol  min-h-[auto] md:!min-w-32"
                    alt="donyshop"
                  />
                </figure>
                <h1 className="head-dony md:text-2xl">DONY</h1>
              </div>
            </HeaderLogo>
            <div className="w-full p-1 flex-grow hidden md:flex">
              <div className="flex items-center head-boxs flex-grow">
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
                    <ShopSvg className="w-8 h-8" />
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
                    <LoginSvg className="w-8 h-8" />
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
                    <CartSvg className="w-8 h-8" />
                    <p className="head-copy">
                      <span className="head-name">Giỏ hàng</span>
                      <span className="head-note">Miễn phí vận chuyển</span>
                    </p>
                  </div>
                  <div className="head-items-popover right-0">
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
