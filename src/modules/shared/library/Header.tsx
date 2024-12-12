const Header = () => {
  return (
    <header className="head">
      <div className="head-box">
        <div className="head-container">
          <div className="head-top">
            <span>Miễn phí vận chuyển toàn bộ đơn hàng bất kể giá trị</span>
          </div>
        </div>
      </div>
      <div className="head-group">
        <div className="head-container">
          <nav className="head-nav">
            <div>
              <h1>SEPHORA</h1>
            </div>
            <div>
              <input type="text" value="search" className="head-search" />
            </div>
            <div className="head-columns">
              <div className="head-items head-stores">
                <div>
                  <svg
                    width={28}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    data-comp="Icon StyledComponent "
                  >
                    <g>
                      <path d="M1.5 24a.5.5 0 01-.5-.5v-20a.5.5 0 01.5-.5h21a.5.5 0 01.5.5v20a.5.5 0 01-.5.5h-21zM22 23V4H2v19h20z"></path>
                      <path d="M0 23h24v1H0z"></path>
                      <path d="M7.5 24a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-9zm8.5-1v-9H8v9h8z"></path>
                      <path d="M11.5 13h1v11h-1zM1 6V5h22v1zm0 2V7h22v1zm0 2V9h22v1z"></path>
                    </g>
                  </svg>
                </div>
                <p className="head-copy">
                  <span className="head-name">Stores & Services</span>
                  <span className="head-note">Choose Your Store</span>
                </p>
              </div>
              <div className="head-items head-auth">
                <div>
                  <svg
                    width={28}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    data-comp="Icon StyledComponent "
                  >
                    <g>
                      <path d="M1.5 24a.5.5 0 01-.5-.5v-20a.5.5 0 01.5-.5h21a.5.5 0 01.5.5v20a.5.5 0 01-.5.5h-21zM22 23V4H2v19h20z"></path>
                      <path d="M0 23h24v1H0z"></path>
                      <path d="M7.5 24a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5h9a.5.5 0 01.5.5v10a.5.5 0 01-.5.5h-9zm8.5-1v-9H8v9h8z"></path>
                      <path d="M11.5 13h1v11h-1zM1 6V5h22v1zm0 2V7h22v1zm0 2V9h22v1z"></path>
                    </g>
                  </svg>
                </div>
                <p className="head-copy">
                  <span className="head-name">Sing In</span>
                  <span className="head-note">Choose Your Store</span>
                </p>
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
