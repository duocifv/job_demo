"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import ModalShop from './ModalShop'



const StickyFooter = () => {
  const [isModal, setIsModal] = useState<boolean>(false)
  return (
    <>
      <ModalShop isModal={isModal} setIsModal={setIsModal} />
      <div className="fixed z-50 bottom-0 w-full bg-white shadow-lg text-[12px]">
        <nav className="flex justify-around items-center p-1 pt-2">
          <a href="/" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <svg viewBox="0 0 24 24" className="w-4 h-4 mb-1" fill="currentColor" aria-hidden="true">
              <path d="M22.338 7.854v-.001l-9.516-6.404a1.494 1.494 0 0 0-1.676 0L1.661 7.842A1.5 1.5 0 0 0 1 9.085V22.5A1.5 1.5 0 0 0 2.5 24h6a1.5 1.5 0 0 0 1.5-1.5v-7a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v7a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V9.098c0-.5-.248-.966-.662-1.244Z"></path>
            </svg>
            <span>Home</span>
          </a>

          <button onClick={(() => setIsModal(!isModal))} className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <svg viewBox="0 0 24 24" className="w-4 h-4 mb-1" fill="currentColor" aria-hidden="true">
              <path d="M7.5 0A3.5 3.5 0 0 1 11 3.5V5h3.5c.133 0 .26.053.354.146A.504.504 0 0 1 15 5.5V11h-1V6h-3v1.5a.5.5 0 1 1-1 0V6H5v1.5a.5.5 0 0 1-1 0V6H1v16.5a.5.5 0 0 0 .5.5H8v1H1.5A1.5 1.5 0 0 1 0 22.5v-17c0-.133.053-.26.146-.354A.504.504 0 0 1 .5 5H4V3.5A3.5 3.5 0 0 1 7.5 0Zm16 12c.133 0 .26.053.354.146A.504.504 0 0 1 24 12.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 9 22.5v-10c0-.133.053-.26.146-.354A.504.504 0 0 1 9.5 12Zm-.5 1H10v9.5a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V13Zm-3.5 2a.5.5 0 0 1 .5.5v1a3.504 3.504 0 0 1-3.5 3.5 3.504 3.504 0 0 1-3.5-3.5v-1a.5.5 0 1 1 1 0v1a2.5 2.5 0 1 0 5 0v-1a.5.5 0 0 1 .5-.5ZM7.5 1A2.5 2.5 0 0 0 5 3.5V5h5V3.5A2.5 2.5 0 0 0 7.5 1Z"></path>
            </svg>
            <span>Shop</span>
          </button>

          <a href="/beauty/beauty-offers" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <svg viewBox="0 0 24 24" className="w-4 h-4 mb-1" fill="currentColor" aria-hidden="true">
              <g>
                <path d="M18.346 3.988a1.959 1.959 0 0 0-2.005 1.853 1.957 1.957 0 1 0 3.912.112 1.96 1.96 0 0 0-1.907-1.965Zm-.025 1a.957.957 0 0 1 .932.955.957.957 0 0 1-1.913-.06.956.956 0 0 1 .98-.895Z"></path>
                <path d="M21.82 1.126 13.488.91a1.47 1.47 0 0 0-1.054.405L.49 12.658a1.47 1.47 0 0 0-.055 2.08l8.118 8.55a1.472 1.472 0 0 0 2.08.051L22.58 11.995c.283-.27.448-.64.457-1.03l.216-8.331a1.469 1.469 0 0 0-1.433-1.508Zm-8.359.784 8.333.216a.47.47 0 0 1 .458.481l-.216 8.333a.47.47 0 0 1-.146.33L9.944 22.614a.472.472 0 0 1-.667-.016l-8.117-8.55a.47.47 0 0 1 .017-.664L13.124 2.04a.471.471 0 0 1 .337-.13Z"></path>
                <path d="M14.009 9a.504.504 0 0 0-.354.146l-.35.35a2.579 2.579 0 0 0-1.286-.457 2.105 2.105 0 0 0-1.666.603c-1.047 1.046-.282 2.511.092 3.224.729 1.332.499 1.801.261 2.038a1.38 1.38 0 0 1-1.925-.176 3.434 3.434 0 0 1-.782-1.936.498.498 0 0 0-.778-.381.502.502 0 0 0-.22.45 4.59 4.59 0 0 0 .763 2.177l-.36.36a.5.5 0 1 0 .707.707l.351-.351c.423.296.927.458 1.443.463a2.107 2.107 0 0 0 1.508-.606c1.082-1.082.198-2.695-.087-3.217-.57-1.092-.646-1.666-.266-2.045.237-.23.563-.345.892-.313a1.63 1.63 0 0 1 1.033.488c.374.356.549.874.464 1.383a.503.503 0 0 0 .764.523.49.49 0 0 0 .215-.318 2.499 2.499 0 0 0-.425-1.9l.36-.359A.5.5 0 0 0 14.009 9Z"></path>
              </g>
            </svg>
            <span>Offers</span>
          </a>
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <svg viewBox="0 0 24 24" className="w-4 h-4 mb-1" fill="currentColor" aria-hidden="true">
              <path d="M3.5 3.914H3v-.5a.5.5 0 0 0-1 0v.5h-.5a.5.5 0 1 0 0 1H2v.5a.5.5 0 1 0 1 0v-.5h.5a.5.5 0 0 0 0-1m5.707 1.5.354-.354a.5.5 0 0 0-.708-.707l-.353.354-.354-.354a.5.5 0 0 0-.707.707l.354.354-.354.354a.5.5 0 0 0 .707.707L8.5 6.12l.353.354a.5.5 0 1 0 .708-.707l-.354-.354v.001Zm-3.639-2.5a1 1 0 0 1 1.418-.002l.001.001c.43.428.49 1.09.088 1.55a.5.5 0 0 0 .716.696c.813-.935.765-2.337-.261-3.036-.021-.021-.042-.042-.064-.062.226.257-.075.263-.348-.003a2.013 2.013 0 0 0-2.94.06Z"></path>
            </svg>
            <span>Search</span>
          </button>
        </nav>
      </div>
      </>
  )
}

export default StickyFooter
