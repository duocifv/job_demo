'use client'
import Modal from '@/components/Modal'
import classNames from 'classnames'

const ModalShop = (p) => {
  // const [isVisible, setIsVisible] = useState(false)
  // useEffect(() => {
  //   if (isModal) setIsVisible(true)
  // }, [isModal])
  // const handleClose = () => {
  //   setIsVisible(false)
  //   setTimeout(() => {
  //     setIsModal(false)
  //   }, 500)
  // }

  return (
    <div className={classNames('relative')}>
      <Modal isOpen={p.isModal} title="Danh mục" onClose={p.onClose}>
        <menu className="columns text-sm">
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">
            Thương hiệu
          </li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">Dép Nữ</li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">
            Dép Nam
          </li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">Trẻ em</li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">Trẻ em</li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">Trẻ em</li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">Trẻ em</li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">Trẻ em</li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">Trẻ em</li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">Trẻ em</li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">Trẻ em</li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">Trẻ em</li>
          <li className="shadow-sm py-2 px-4 border rounded-md mt-3">Trẻ em</li>
        </menu>
      </Modal>
    </div>
  )
}

export default ModalShop
