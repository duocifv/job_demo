import { Button } from '@/components/Button'
import classNames from 'classnames'
import { useState } from 'react'

export default function ProductDetailInfor() {
  const [more, setMore] = useState<boolean>(true)
  return (
    <div
      className={
        'overflow-hidden bg-foreground pt-8 pb-0 md:py-24 sm:py-32 content-wp'
      }
    >
      <div className="mx-auto max-w-7xl lg:px-8 bg-white md:rounded-lg border py-5 md:py-10 px-2 md:px-9">
        <div
          className={classNames(
            'mx-auto overflow-hidden',
            more ? 'max-h-56' : 'max-h-full'
          )}
        >
          <div className="lg:pr-8 lg:pt-4 min-w-full">
            <div className="text-sm">
              <h2 className="text-sm md:text-base font-semibold text-gray-400">
                Mô tả
              </h2>
              <p className="mt-2 text-base md:text-2xl font-semibold tracking-tight text-gray-900">
                Giày Thể Thao Adidas Spezial - Cổ Điển, Tinh Tế | Dony Shop
              </p>
              <p className="mt-6 text-sm md:text-base leading-normal text-gray-600">
                Giày thể thao Adidas Spezial mang đậm phong cách cổ điển, với
                thiết kế tối giản và các chi tiết tinh tế. Được lấy cảm hứng từ
                những mẫu giày bóng đá cổ điển của Adidas, đôi giày này sở hữu
                chất liệu da lộn cao cấp và đường may tỉ mỉ, mang lại sự bền bỉ
                và thoải mái tối đa. Đế giày linh hoạt, chống trơn trượt, phù
                hợp để di chuyển trong nhiều điều kiện địa hình. Adidas Spezial
                là sự lựa chọn lý tưởng cho những ai yêu thích phong cách retro,
                dễ dàng phối với nhiều trang phục từ casual đến thể thao.
                <br />
                <br />
                Đặc điểm nổi bật:
                <br />
                Thiết kế cổ điển, lấy cảm hứng từ giày bóng đá vintage của
                Adidas.
                <br />
                Chất liệu da lộn mềm mại, bền bỉ và dễ dàng vệ sinh.
                <br />
                Đế giày chống trượt, linh hoạt, tạo cảm giác thoải mái khi di
                chuyển.
                <br />
                Phù hợp với nhiều phong cách và dễ dàng phối đồ.
                <br />
                Dony Shop cam kết mang đến các sản phẩm Adidas Spezial đảm bảo
                chất lượng và mức giá cạnh tranh. Hãy nhanh tay đặt mua đôi giày
                Adidas Spezial để thể hiện phong cách thời trang cổ điển và năng
                động của bạn!
                <br />
              </p>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://product.hstatic.net/200000657377/product/6_52bd5cc24e2d48128bd3186d98794757_master.jpg"
          />
        </div>
        <Button
          onClick={() => setMore(!more)}
          copy={more ? 'Xem thêm' : 'Thu gọn'}
          variant="light"
          className="w-36 mx-auto mt-4"
        />
      </div>
    </div>
  )
}
