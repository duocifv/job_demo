const products = [
  {
    id: 1,
    name: 'Giày Thể Thao Adidas Spezial - Cổ Điển, Tinh Tế | Dony Shop',
    href: '#',
    imageSrc:
      'https://product.hstatic.net/200000657377/product/1_49b9827b142b4d31b320f426977afd3e_master.jpg',
    imageAlt: 'Giày Thể Thao Adidas Spezial - Cổ Điển, Tinh Tế | Dony Shop',
    price: '660,000 VND',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Dép Nữ Hermes Chypre - Sang Trọng, Thời Thượng',
    href: '#',
    imageSrc:
      'https://product.hstatic.net/200000657377/product/product-dony-_1__bd766fb2621e4945b835d289057c75bd_master.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '660,000 VND',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Dép nữ Christian Dior Dway Slide - Sang trọng, đẳng cấp, tinh tế',
    href: '#',
    imageSrc:
      'https://product.hstatic.net/200000657377/product/1_a48a71c475b94ddea7b575d904b07a06_master.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '660,000 VND',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Dép Nike Calm Slide - Thiết kế tối giản, tinh tế, phù hợp với mọi outfit',
    href: '#',
    imageSrc:
      'https://product.hstatic.net/200000657377/product/1_24157cb6a7f04ba5abad0df36b67b2f1_master.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '660,000 VND',
    color: 'Black',
  },
  // More products...
]

export default function ProductSimilaritems() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-2 md:px-4 pt-8 pb-0 md:py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-base md:text-2xl font-bold tracking-tight text-gray-900">
          Các mặt hàng tương tự
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 md:gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative flex lg:block">
              <figure className="w-[30%] lg:w-full">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                />
              </figure>
              <div className="w-[70%] lg:w-full flex justify-between">
                <div className="ml-2 lg:ml-0 lg:mt-2">
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
