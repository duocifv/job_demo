'use client'
import Modal from '@/components/Modal'
import ProductShoppingCart from '@/modules/product/library/ProductShoppingCart'
import classNames from 'classnames'

const ModalCart = (p) => {
  return (
    <div className={classNames('relative')}>
      <Modal isOpen={p.isModal} title="Giỏ hàng" onClose={p.onClose}>
        <div className="columns text-sm pb-8">
          <ProductShoppingCart />
        </div>
      </Modal>
    </div>
  )
}

export default ModalCart
