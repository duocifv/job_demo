'use client'
import { Button } from '@/components/Button'
import classNames from 'classnames'
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'

const ProductsCarousel: FC<{ className?: string; children: ReactNode }> = (
  p
) => {
  const carousel = useRef(null)
  const carouselChild = useRef(null)
  const [client, setClient] = useState(0)
  const [items, setItems] = useState(0)
  const [item, setItem] = useState(0)
  const [more, setMore] = useState<boolean>(false)

  const updateDimensions = () => {
    if (carousel.current) {
      const element = carousel.current
      console.dir(element, element.clientHeight)

      setClient(element.clientWidth)
    }

    if (carouselChild.current) {
      const el = carouselChild.current
      setItems(el.firstElementChild.clientWidth * el.childElementCount)
    }
  }

  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', () => {
      setItem(0)
      updateDimensions()
    })
    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  const handleNext = () => {
    let itemNext = item + client
    const rest = items - itemNext
    if (client > rest) {
      itemNext = item + rest
    }
    setItem(itemNext)
  }

  const handlePre = () => {
    let itemPre = item - client

    if (itemPre <= 0) {
      itemPre = 0
    }

    setItem(itemPre)
  }
  return (
    <>
      <div
        className={classNames(
          'products-container product-col-sp',
          more && '!max-h-full'
        )}
      >
        {item > 0 && (
          <button
            className="products-carousel-button pre hidden md:block"
            onClick={handlePre}
          >
            <i className="products-carousel-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="32px"
                width="32px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"></path>
              </svg>
            </i>
          </button>
        )}
        {!(item + client >= items) && (
          <button
            className="products-carousel-button next hidden md:block"
            onClick={handleNext}
          >
            <i className="products-carousel-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="32px"
                width="32px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path>
              </svg>
            </i>
          </button>
        )}

        <div
          ref={carousel}
          className={classNames('products product-col-sp', !more && 'product-more')}
        >
          <div
            className="products-carousel"
          >
            <div
              className={classNames('products-carousel-items')}
              style={{ left: `-${item}px` }}
              ref={carouselChild}
            >
              {p.children}
            </div>
          </div>
        </div>
      </div>

      <div className="column-center gap-4 px-6 mt-7 md:hidden">
        {!more && (
          <Button
            variant="light"
            onClick={() => setMore(true)}
            copy="Xem thêm"
            className="w-1/2"
          />
        )}
        <Button
          className="w-1/2"
          copy="Xem tất cả"
        />
      </div>
    </>
  )
}

export default ProductsCarousel
