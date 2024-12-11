import React from 'react'

const HeroHome = () => {
  return (
    <article>
      <div className="bg-secondary h-[74vh] flex items-stretch justify-between">
        <div className="w-7/12">
          <div className="hero-head">
            <hgroup>
              <p className="text-sm text-primary">
                Lorem ipsum dolor sit, amet consectetur?
              </p>
              <h2 className="text-4xl text-dark leading-normal mt-6">
                Enter the Real
                <br />
                Estate Market with
                <br />
                Confidence
              </h2>
            </hgroup>
            <p className="text-base leading-normal mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id libero
              optio iure sequi, quis aliquid voluptatibus cupiditate dignissimos
              excepturi.
            </p>
            <button className="share-button mt-6">Lorem ipsum dolor sit</button>
          </div>
        </div>
        <figure className="w-5/12">
          <img
            className="hero-photo"
            src="https://img.dormy-hotels.com/resort/hotels/kikuya/facilities/images/img_title.webp"
            alt=""
          />
        </figure>
      </div>
    </article>
  )
}

export default HeroHome
