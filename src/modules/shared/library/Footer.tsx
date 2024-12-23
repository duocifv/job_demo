import Line from '@/components/Line'
import Picture from '@/components/Picture'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-items">
          <div className="footer-group">
            <ul className="footer-item">
              <li className="footer-item-large">Danh mục</li>
              <li>Dép nữ</li>
              <li>Dép nam</li>
              <li>Trẻ em</li>
              <li>Sandal</li>
              <li>Sneaker</li>
              <li>Cao gót</li>
              <li>Giày thể thao</li>
              <li>Hàng cao cấp</li>
            </ul>
            <ul className="footer-item">
              <li className="footer-item-large">Về chúng tôi</li>
              <li>Giới thiệu</li>
              <li>Tin tức</li>
              <li>Chính sách đổi/trả hàng</li>
              <li>Chính sách bảo hành</li>
              <li>Chính sách bảo mật thông tin</li>
              <li>Điều khoản sử dụng</li>
            </ul>
            <ul className="footer-item">
              <li className="footer-item-large">Hỗ trợ khách hàng</li>
              <li>Liên hệ</li>
              <li>Hướng dẫn mua hàng</li>
              <li>Hướng dẫn thanh toán</li>
              <li>Câu hỏi thường gặp (FAQs)</li>
            </ul>

            <ul className="footer-item footer-order">
              <li className="footer-item-large min-w-full">Thanh toán</li>
              <li className="footer-order-item">
                <Picture
                  width={64}
                  height={64}
                  src="/icon/logo1.webp"
                  alt={''}
                />
              </li>
              <li className="footer-order-item">
                <Picture
                  width={64}
                  height={64}
                  src="/icon/logo2.webp"
                  alt={''}
                />
              </li>
              <li className="footer-order-item">
                <Picture
                  width={64}
                  height={64}
                  src="/icon/logo3.webp"
                  alt={''}
                />
              </li>
              <li className="footer-order-item">
                <Picture
                  width={64}
                  height={64}
                  src="/icon/logo4.webp"
                  alt={''}
                />
              </li>
              <li className="footer-order-item">
                <Picture
                  width={64}
                  height={64}
                  src="/icon/logo5.png"
                  alt={''}
                />
              </li>
              <li className="footer-order-item">
                <Picture
                  width={64}
                  height={64}
                  src="/icon/logo7.webp"
                  alt={''}
                />
              </li>
            </ul>
          </div>
            <ul className="footer-item pb-0">
              <li className="footer-item-large">Thông tin liên hệ</li>
              <li>
                <b>Địa chỉ:</b> 123 Đường ABC, Quận XYZ, TP. HCM
              </li>
              <li>
                <b>Số điện thoại: </b>0123 456 789
              </li>
              <li>
                <b>Email: </b>support@example.com
              </li>
              <li>
                <b>Thời gian làm việc:</b>
                <br />
                Thứ 2 - Chủ Nhật, 8:00 - 21:00
              </li>
            </ul>
        </div>
        <Line className="border-dark-6" />
        <div className="footer-info">
          <div className="footer-copyright">
            <span>© 2024 Dony shoes. All rights reserved.</span>
            <ul className="footer-caption">
              <li>Theo dõi chúng tôi </li>
              <li>
                <Link href="https://shopee.vn/donyshoes" target="_blank">
                  ▸ Shopee
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.lazada.vn/shop/dony-shoes"
                  target="_blank"
                >
                  ▸ Lazada
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.lazada.vn/shop/dony-shoes"
                  target="_blank"
                >
                  ▸ Tiktok
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.lazada.vn/shop/dony-shoes"
                  target="_blank"
                >
                  ▸ Zalo
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-marketing">
            <Link href="/2">
              <Picture src="icon/facebook.svg" alt="" width={36} height={36} />
            </Link>
            <Link href="/2">
              <Picture src="icon/instagram.svg" alt="" width={36} height={36} />
            </Link>
            <Link href="/2">
              <Picture src="icon/pinterest.svg" alt="" width={36} height={36} />
            </Link>
            <Link href="/2">
              <Picture src="icon/tiktok.svg" alt="" width={36} height={36} />
            </Link>
            <Link href="/2">
              <Picture src="icon/x.svg" alt="" width={36} height={36} />
            </Link>
            <Link href="/2">
              <Picture src="icon/youtube.svg" alt="" width={36} height={36} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
