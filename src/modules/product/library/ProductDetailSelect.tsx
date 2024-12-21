'use client'
import classNames from 'classnames'
import { useState } from 'react'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

export default function ProductDetailSelect() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  return (
    <div className="bg-white">
      <div className="pt-2">
        <div>
          <h3 className="text-sm font-medium text-gray-900">Màu sắc</h3>

          <fieldset aria-label="Choose a color" className="mt-4">
            <div className="flex items-center gap-x-3">
              {product?.colors?.map((color) => (
                <div key={color.name} className="cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    value={color.name}
                    checked={selectedColor.name === color.name}
                    onChange={() => setSelectedColor(color)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={classNames(
                      color.selectedClass,
                      selectedColor.name === color.name && 'bg-primary',
                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        color.class,
                        'w-8 h-8 rounded-full border border-black/10'
                      )}
                    />
                  </span>
                </div>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Sizes */}
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">Kích thước</h3>
          </div>

          <fieldset aria-label="Choose a size" className="mt-4">
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
              {product.sizes.map((size) => (
                <label key={size.name} className="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value={size.name}
                    checked={selectedSize.name === size.name}
                    onChange={() => setSelectedSize(size)}
                    disabled={!size.inStock}
                    className="sr-only"
                  />
                  <div
                    className={classNames(
                      selectedSize.name === size.name &&
                        'border-primary bg-gray-50',
                      size.inStock
                        ? 'bg-white text-gray-900'
                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                      'relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 h-14'
                    )}
                  >
                    {size.name}
                    {!size.inStock && (
                      <span className="absolute inset-0 rounded-md border-2 border-gray-200">
                        <svg
                          stroke="currentColor"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          className="absolute inset-0 w-full h-full text-gray-200"
                        >
                          <line
                            x1={0}
                            x2={100}
                            y1={100}
                            y2={0}
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}
