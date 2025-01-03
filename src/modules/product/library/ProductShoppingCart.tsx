import { Button } from '@/components/Button'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Giày Thể Thao Adidas Spezial - Cổ Điển, Tinh Tế | Dony Shop',
    href: '#',
    color: 'Đỏ',
    price: '800,000 VNĐ',
    quantity: 1,
    imageSrc:
      'https://product.hstatic.net/200000657377/product/6_52bd5cc24e2d48128bd3186d98794757_master.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Giày Thể Thao Adidas Spezial - Cổ Điển, Tinh Tế | Dony Shop',
    href: '#',
    color: 'Xanh',
    price: '600,000 VNĐ',
    quantity: 1,
    imageSrc:
      'https://product.hstatic.net/200000657377/product/1_49b9827b142b4d31b320f426977afd3e_master.jpg',
    imageAlt: 'Giày Thể Thao Adidas Spezial - Cổ Điển, Tinh Tế | Dony Shop',
  },
]

const ProductShoppingCart = (p) => {
  return (
    <div className="md:relative md:z-[99999]">
      <div className="md:fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />

      <div className="md:fixed inset-0 overflow-hidden">
        <div className="md:absolute inset-0 overflow-hidden">
          <div className="pointer-events-none md:fixed inset-y-0 right-0 flex max-w-full">
            <div className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700">
              <div className="flex h-full flex-col md:overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 md:overflow-y-auto md:px-4 md:py-6">
                  <div className="items-start justify-between hidden md:flex">
                    <div className="text-lg font-medium text-gray-900">
                      Giỏ hàng
                    </div>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => p.setOpenCart(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />

                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="32px"
                          width="32px"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm86.63 272L320 342.63l-64-64-64 64L169.37 320l64-64-64-64L192 169.37l64 64 64-64L342.63 192l-64 64z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="md:mt-8">
                    <div className="flow-root">
                      <ul className="md:-my-6 divide-y divide-gray-200">
                        {products.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="size-full object-cover"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-sm md:text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}>{product.name}</a>
                                  </h3>
                                </div>
                                <p className="mt-1 text-sm">{product.price}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  Màu: {product.color}
                                </p>
                                <p className="text-gray-500">
                                  Số lượng {product.quantity}
                                </p>

                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Xóa
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 md:px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Tổng cộng</p>
                    <p>1,400,000 VNĐ</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Thuế được tính khi thanh toán.
                  </p>
                  <div className="mt-6">
                    <Link href="/12">
                      <Button
                        copy="Thanh toán"
                        variant="primary"
                        size="large"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductShoppingCart
