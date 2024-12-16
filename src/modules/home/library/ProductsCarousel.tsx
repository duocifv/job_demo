'use client'
import React, { useEffect, useRef, useState } from 'react'

const ProductsCarousel = (p) => {
  const carousel = useRef(null)
  const carouselChild = useRef(null)
  const [client, setClient] = useState(0)
  const [items, setItems] = useState(0)
  const [item, setItem] = useState(0)

  useEffect(() => {
    if (carousel.current) {
      const elment = carousel.current
      console.dir(elment, elment.clientWidth)
      setClient(elment.clientWidth)
    }
    if (carouselChild.current) {
      const el = carouselChild.current
      setItems(el.firstElementChild.clientWidth * el.childElementCount)
      console.dir(carouselChild.current)
    }
    //setItems((Math.floor(total * 100) / 100) * 10)
  }, [])
  const handleNext = () => {
    let itemNext = item + client
    const rest = items - itemNext
    if (rest < 0) {
      itemNext = item + rest
    }
    console.log('itemNext', itemNext, 'items', items, 'rest', rest)
    if (rest === 0) {
      setItem(0)
      return
    }
    setItem(itemNext)
  }
  return (
    <div ref={carousel} className="products">
      <div className="products-carousel">
        <div
          className="products-carousel-items"
          style={{ left: `-${item}px` }}
          ref={carouselChild}
        >
          {p.children}
        </div>
        <button className="products-carousel-next" onClick={handleNext} />
      </div>
    </div>
  )
}

export default ProductsCarousel
