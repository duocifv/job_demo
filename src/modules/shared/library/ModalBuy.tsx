'use client'
import Modal from '@/components/Modal'
import classNames from 'classnames'

const ModalBuy = (p) => {
  return (
    <div className={classNames('relative')}>
      <Modal isOpen={p.isModal} title="Thanh toán" onClose={p.onClose}>
        <menu className="columns text-sm pb-8">
          <li>Chưa mở</li>
        </menu>
      </Modal>
    </div>
  )
}

export default ModalBuy
