'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import classNames from 'classnames'
import ModalInfo from './ModalInfo'
import ModalMessage from './ModalMessage'
import GoBackHome from '@/components/GoBackHome'
import PhoneSvg from '@/components/icons/PhoneSvg'
import MessageSvg from '@/components/icons/MessageSvg'

const ModalShop = dynamic(() => import('./ModalShop'), {
  ssr: false,
})

const StickyFooter = () => {
  const [openModal, setOpenModal] = useState(null)
  const [isClose, setIsClose] = useState(true)
  const handleOpen = (modal) => {
    if (openModal !== modal) {
      setIsClose(false)
      setOpenModal(modal)
    } else {
      handleClose()
    }
  }
  const handleClose = () => {
    setIsClose(true)
    setOpenModal(null)
  }
  return (
    <div className="md:hidden">
      <div className="fixed border-t z-50 bottom-0 w-full bg-white shadow-lg text-[12px]">
        <nav className="flex justify-around items-center">
          <GoBackHome className="flex pt-2 pb-1 min-w-16 flex-col items-center text-gray-600 hover:text-blue-500">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 mb-1"
              data-comp="Icon StyledComponent "
            >
              <path d="M21.5 24h-6a1.5 1.5 0 01-1.5-1.5v-7a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v7A1.5 1.5 0 018.5 24h-6A1.5 1.5 0 011 22.5V9.085a1.5 1.5 0 01.661-1.243l9.485-6.393a1.494 1.494 0 011.676 0l9.516 6.404c.414.28.662.746.662 1.245V22.5a1.5 1.5 0 01-1.5 1.5zm-11-10h3a1.5 1.5 0 011.5 1.5v7a.5.5 0 00.5.5h6a.5.5 0 00.5-.5V9.098a.502.502 0 00-.22-.415L12.262 2.28a.494.494 0 00-.558 0L2.22 8.67a.499.499 0 00-.22.414V22.5a.5.5 0 00.5.5h6a.5.5 0 00.5-.5v-7a1.5 1.5 0 011.5-1.5z"></path>
            </svg>
            <span>Home</span>
          </GoBackHome>

          <button
            onClick={() => handleOpen('shop')}
            className="flex pt-2 pb-1 min-w-16 flex-col items-center text-gray-600 hover:text-blue-500"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 mb-1"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7.5 0A3.5 3.5 0 0 1 11 3.5V5h3.5c.133 0 .26.053.354.146A.504.504 0 0 1 15 5.5V11h-1V6h-3v1.5a.5.5 0 1 1-1 0V6H5v1.5a.5.5 0 0 1-1 0V6H1v16.5a.5.5 0 0 0 .5.5H8v1H1.5A1.5 1.5 0 0 1 0 22.5v-17c0-.133.053-.26.146-.354A.504.504 0 0 1 .5 5H4V3.5A3.5 3.5 0 0 1 7.5 0Zm16 12c.133 0 .26.053.354.146A.504.504 0 0 1 24 12.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 9 22.5v-10c0-.133.053-.26.146-.354A.504.504 0 0 1 9.5 12Zm-.5 1H10v9.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V13Zm-3.5 2a.5.5 0 0 1 .5.5v1a3.504 3.504 0 0 1-3.5 3.5 3.504 3.504 0 0 1-3.5-3.5v-1a.5.5 0 1 1 1 0v1a2.5 2.5 0 1 0 5 0v-1a.5.5 0 0 1 .5-.5ZM7.5 1A2.5 2.5 0 0 0 5 3.5V5h5V3.5A2.5 2.5 0 0 0 7.5 1Z"></path>
            </svg>
            <span>Shop</span>
          </button>

          <button
            className="flex pt-2 pb-1 min-w-16 flex-col items-center text-gray-600 hover:text-blue-500"
            onClick={() => handleOpen('message')}
          >
            <MessageSvg size={20} />
            <span>Nhắn tin</span>
          </button>
          <button
            className="flex pt-2 pb-1 min-w-16 flex-col items-center text-gray-600 hover:text-blue-500"
            onClick={() => handleOpen('info')}
          >
            <PhoneSvg size={20} />
            <span>Liên hệ</span>
          </button>
        </nav>
      </div>
      <div
        role="button"
        onClick={() => handleClose()}
        onTouchStart={() => handleClose()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleClose()
        }}
        tabIndex={0}
        className={classNames(
          'border-2 fixed top-0 w-full min-h-full ',
          isClose ? 'effect-close z-[-1]' : 'effect-open z-40'
        )}
      >
        {openModal === 'message' && (
          <ModalMessage isModal={true} onClose={handleClose} />
        )}
        {openModal === 'info' && (
          <ModalInfo isModal={true} onClose={handleClose} />
        )}
        {openModal === 'shop' && (
          <ModalShop isModal={true} onClose={handleClose} />
        )}
      </div>
    </div>
  )
}

export default StickyFooter
