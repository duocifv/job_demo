'use client'
import Modal from '@/components/Modal'
import classNames from 'classnames'

const ModalCart = (p) => {
  return (
    <div className={classNames('relative')}>
      <Modal isOpen={p.isModal} title="Giỏ hàng" onClose={p.onClose}>
        <menu className="columns text-sm pb-8">
          <li>Chưa mở</li>
        </menu>
      </Modal>
    </div>
  )
}

export default ModalCart
