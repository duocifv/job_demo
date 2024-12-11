import Menu from './Menu'

const Header = () => {
  return (
    <header className="bg-transparent absolute w-full">
      <div className="w-7/12">
        <div className="w-[520px] mx-auto flex">
          <div className="flex justify-center items-center">
            <span className="border-r pr-4">LOGO</span>
          </div>
          <Menu />
        </div>
      </div>
    </header>
  )
}

export default Header
