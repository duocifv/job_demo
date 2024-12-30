import { flashSaleService } from '../feature/home.service'
import ProductsCarousel from '../../shared/library/ProductsCarousel'
import ProductCard from '@/modules/shared/library/ProductCard'
import styles from '../stylesheet/FlashSale.module.scss'
import FlashTime from './FlashTime'

const FlashSale = async () => {
  const products = await flashSaleService()

  return (
    <div className={styles.flashsale}>
      <div className={styles.flashsaleContainer}>
        <div className={styles.flashsaleHeader}>
          <div className={styles.flashsaleCopy}>
            <p className={styles.flashsaleNote}>CHỈ ÁP DỤNG KHI MUA HÀNG TẠI</p>
            <span className={styles.flashsaleLogo}>DONY SHOES</span>
          </div>
          <div className={styles.flashsaleBox}>
            <div className={styles.flashsaleShip}>
              <div className={styles.flashsaleLabel}>
                <div className={styles.flashsaleLabelText}>
                  <i className={styles.flashsaleIcon}>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="24px"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32z"></path>
                    </svg>
                  </i>
                  Kết thúc trong
                </div>
                <FlashTime />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flashsaleWrap}>
          <div className={styles.flashsaleProducts}>
            <ProductsCarousel>
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="px-2 min-w-[303px]"
                />
              ))}
            </ProductsCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashSale
