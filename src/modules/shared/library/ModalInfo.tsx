'use client'
import FacebookSvg from '@/components/icons/FacebookSvg'
import InstagramSvg from '@/components/icons/InstagramSvg'
import PinterestSvg from '@/components/icons/PinterestSvg'
import TiktokSvg from '@/components/icons/TiktokSvg'
import YoutubeSvg from '@/components/icons/YoutubeSvg'
import Modal from '@/components/Modal'
import classNames from 'classnames'
import Link from 'next/link'

const ModalInfo = (p) => {
  return (
    <div className={classNames('relative')}>
      <Modal isOpen={p.isModal} title="Thông tin" onClose={p.onClose}>
        <menu className="columns text-sm pb-8">
          <li className="">
            <h4 className="text-base font-bold mt-4">Mạng xã hội</h4>
            <div className="mt-2 column-start -ml-2">
              <Link href="/2">
                <FacebookSvg color="text-red-400" size={48} />
              </Link>
              <Link href="/2">
                <InstagramSvg color="text-dark" size={48} />
              </Link>
              <Link href="/2">
                <PinterestSvg color="text-dark" size={48} />
              </Link>
              <Link href="/2">
                <TiktokSvg color="text-dark" size={48} />
              </Link>
              <Link href="/2">
                <YoutubeSvg color="text-dark" size={48} />
              </Link>
            </div>
            <h4 className="text-base font-bold mt-6">Liên hệ</h4>
            <ul className="leading-relaxed mt-2">
              <li>
                <b>Số điện thoại: </b>0123 456 789
              </li>
              <li>
                <b>Địa chỉ:</b> 123 Đường ABC, Quận XYZ, TP. HCM
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
          </li>
        </menu>
      </Modal>
    </div>
  )
}

export default ModalInfo
