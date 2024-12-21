import React from 'react'

interface Option {
  value: string
  label: string
  style?: React.CSSProperties
}

interface ProductOptionSelectProps {
  label: string
  selectedValue: string
  options: Option[]
  onChange: (value: string) => void
}

const ProductOptionSelect: React.FC<ProductOptionSelectProps> = ({
  label,
  selectedValue,
  options,
  onChange,
}) => {
  // Hàm xử lý sự kiện khi nhấn phím Enter hoặc Space
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    optionValue: string
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onChange(optionValue)
    }
  }

  return (
    <div className="product-detail-options">
      <div className="product-options-item">
        <div className="product-options-color-select">
          <div className="product-options-selected-color">
            {label}: {selectedValue || `Select ${label}`}
          </div>
          <div className="product-options-list">
            {options.map((option) => (
              <div
                key={option.value}
                className={`product-option-item ${selectedValue === option.value ? 'selected' : ''}`}
                onClick={() => onChange(option.value)}
                onKeyDown={(e) => handleKeyDown(e, option.value)} // Xử lý sự kiện bàn phím
                tabIndex={0} // Đảm bảo phần tử có thể nhận diện được bằng bàn phím
                role="button" // Cung cấp vai trò "button" cho phần tử
                aria-pressed={selectedValue === option.value ? 'true' : 'false'} // Để hỗ trợ tình trạng đã chọn
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOptionSelect
