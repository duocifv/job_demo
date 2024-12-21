import { Button } from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import HeroCarousel from './HeroCarousel'

const HeroHome = () => {
  return (
    <div className="hero">
      <div className="hero-items">
        <HeroCarousel className="w-full max-w-full min-w-full">
          <div className="hero-item">
            <div className="hero-banner">
              <Image
                src="/banner/banner1.jpg"
                width={540}
                height={360}
                alt=""
              />
            </div>
            <div className="hero-caption">
              <h3 className="text-xl">The Best Gifts - Only at Sephora</h3>
              <div className="mb-3 text-sm">
                Limited-edition picks to delight everyone on your list.
              </div>
              <Button
                copy="XEM NGAY ▸"
                variant="secondary"
                className="w-[160px]"
              />
            </div>
          </div>

          <div className="hero-item">
            <div className="hero-banner">
              <Image
                src="/banner/banner6.jpg"
                width={540}
                height={360}
                alt=""
              />
            </div>
            <div className="hero-caption">
              <h3 className="text-xl">The Best Gifts - Only at Sephora</h3>
              <div className="mb-3 text-sm">
                Limited-edition picks to delight everyone on your list.
              </div>
              <Button
                copy="XEM NGAY ▸"
                variant="secondary"
                className="w-[160px]"
              />
            </div>
          </div>
          <div className="hero-item">
            <div className="hero-banner">
              <Image
                src="/banner/banner4.jpg"
                width={540}
                height={360}
                alt=""
              />
            </div>
            <div className="hero-caption">
              <h3 className="text-xl">The Best Gifts - Only at Sephora</h3>
              <div className="mb-3 text-sm">
                Limited-edition picks to delight everyone on your list.
              </div>
              <Button
                copy="XEM NGAY ▸"
                variant="secondary"
                className="w-[160px]"
              />
            </div>
          </div>
          <div className="hero-item">
            <div className="hero-banner">
              <Image
                src="/banner/banner2.jpg"
                width={540}
                height={360}
                alt=""
              />
            </div>
            <div className="hero-caption">
              <h3 className="text-xl">The Best Gifts - Only at Sephora</h3>
              <div className="mb-3 text-sm">
                Limited-edition picks to delight everyone on your list.
              </div>
              <Button
                copy="XEM NGAY ▸"
                variant="secondary"
                className="w-[160px]"
              />
            </div>
          </div>
        </HeroCarousel>
      </div>
    </div>
  )
}

export default HeroHome
