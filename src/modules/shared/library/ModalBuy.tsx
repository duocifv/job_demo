'use client'
import { Button } from '@/components/Button'
import Modal from '@/components/Modal'
import classNames from 'classnames'
import Link from 'next/link'

const ModalBuy = (p) => {
  return (
    <div className={classNames('relative')}>
      <Modal isOpen={p.isModal} title="Thanh toán" onClose={p.onClose}>
        <div className="columns text-sm pb-8">
          <div className="flex py-6">
            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                alt="Giày Thể Thao Adidas Spezial - Cổ Điển, Tinh Tế | Dony Shop"
                className="size-full object-cover"
                src="https://product.hstatic.net/200000657377/product/1_49b9827b142b4d31b320f426977afd3e_master.jpg"
              />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-sm md:text-base font-medium text-gray-900">
                  <h3>
                    <a href="1212">
                      Giày Thể Thao Adidas Spezial - Cổ Điển, Tinh Tế | Dony
                      Shop
                    </a>
                  </h3>
                </div>
                <p className="mt-1 text-sm">600,000 VNĐ</p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500">Màu: Xanh</p>
                <p className="text-gray-500">Số lượng 1</p>
                <div className="flex">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 py-2">
            <div className="mt-4">
              <Link href="/12">
                <Button copy="Thanh toán" variant="primary" size="large" />
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ModalBuy
