'use client'
import Search from './Search'
import ShopSvg from '@/components/icons/ShopSvg'
import LoginSvg from '@/components/icons/LoginSvg'
import CartSvg from '@/components/icons/CartSvg'
import { Fragment, useState } from 'react'
import dynamic from 'next/dynamic'
import classNames from 'classnames'

const Popovers = {
  auth: dynamic(() => import('./Popover').then((mod) => mod.PopoverAuth)),
  cart: dynamic(() => import('./Popover').then((mod) => mod.PopoverCart)),
  stores: dynamic(() => import('./Popover').then((mod) => mod.PopoverStores)),
}

const HeadStickyMobile = () => {
  const [openModal, setOpenModal] = useState(null)
  const [animation, setAnimation] = useState(null)

  const handleOpen = (modal) => {
    if (openModal === modal) {
      // Kích hoạt hiệu ứng đóng
      setAnimation(null)
      // Đợi animation kết thúc rồi đóng modal
      setTimeout(() => setOpenModal(null), 200)
    } else {
      setAnimation('effect-in')
      setOpenModal(modal)
    }
  }

  const ModalComponent = openModal ? Popovers[openModal] : null

  return (
    <div className="relative nav-sticky">
      <div className="relative z-20 h-12 p-2 column-center overflow-hidden md:hidden bg-primary">
        <Search />
        {['stores', 'auth', 'cart'].map((modal) => {
          return (
            <button key={modal} onClick={() => handleOpen(modal)}>
              {modal === 'stores' && (
                <ShopSvg className="w-6 text-white mx-2" />
              )}
              {modal === 'auth' && <LoginSvg className="w-6 text-white mx-2" />}
              {modal === 'cart' && <CartSvg className="w-6 text-white mx-2" />}
            </button>
          )
        })}
      </div>

      {['stores', 'auth', 'cart'].map((modal) => (
        <Fragment key={modal}>
          <div
            key={modal}
            role="button"
            className={classNames(
              'absolute z-0 bg-white top-full min-h-min left-0 right-0 w-full effect effect-out',
              openModal === modal && animation
            )}
          >
            {ModalComponent && <ModalComponent />}
          </div>
          {openModal === modal && (
            <div
              role="button"
              onClick={() => handleOpen(modal)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleOpen(modal)
              }}
              tabIndex={0}
              className={classNames(
                'absolute z-0 h-full min-h-[100vh] min-w-full'
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default HeadStickyMobile
