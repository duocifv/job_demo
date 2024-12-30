'use client'
import Search from './Search'
import ShopSvg from '@/components/icons/ShopSvg'
import LoginSvg from '@/components/icons/LoginSvg'
import CartSvg from '@/components/icons/CartSvg'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Popovers = {
  auth: dynamic(() => import('./Popover').then((mod) => mod.PopoverAuth)),
  cart: dynamic(() => import('./Popover').then((mod) => mod.PopoverCart)),
  stores: dynamic(() => import('./Popover').then((mod) => mod.PopoverStores)),
}

const HeadStickyMobile = () => {
  const [openModal, setOpenModal] = useState(null)
  console.log('openModal', openModal)
  const handleOpen = (modal) => {
    setOpenModal(openModal === modal ? null : modal)
  }
  const ModalComponent = openModal ? Popovers[openModal] : null
  return (
    <div className="relative nav-sticky">
      <div className="h-12 p-2 column-center overflow-hidden md:hidden bg-primary">
        <Search />
        {['stores', 'auth', 'cart'].map((modal) => (
          <button key={modal} onClick={() => handleOpen(modal)}>
            {modal === 'stores' && <ShopSvg className="w-6 text-white mx-2" />}
            {modal === 'auth' && <LoginSvg className="w-6 text-white mx-2" />}
            {modal === 'cart' && <CartSvg className="w-6 text-white mx-2" />}
          </button>
        ))}
      </div>
      <div>
        {['stores', 'auth', 'cart'].map((modal) => (
          <div
            key={modal}
            className="absolute top-full left-0 right-0 w-full opacity-0 z-[99998] effect"
            style={{
              opacity: openModal === modal ? 1 : 0,
              transform:
                openModal === modal ? 'translateY(0)' : 'translateY(-10px)',
            }}
          >
            {ModalComponent && <ModalComponent />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeadStickyMobile
