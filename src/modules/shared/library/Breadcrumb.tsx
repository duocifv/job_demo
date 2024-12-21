import React from 'react'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
}

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <nav aria-label="Breadcrumb">
        <ol className="mx-auto flex items-center px-12">
          {product.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a href={breadcrumb.href}>{breadcrumb.name}</a>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"></path>
                </svg>
              </div>
            </li>
          ))}
          <li>
            <a href={product.href}>{product.name}</a>
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
