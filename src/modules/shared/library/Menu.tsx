import React from 'react'
import { shareMenuService } from '../feature/share.service'

const Menu = async () => {
  const list = await shareMenuService()
  return (
    <menu className="menu">
      {list?.map((item: any, index) => {
        return (
          <li className="menu-item" key={index}>
            <a href="#" className="menu-link">
              {item.label}
            </a>
            {item.children.length > 0 && (
              <div className="menu-sub">
                {item.children.map((item, index) => (
                  <div key={index}>
                    <a href="#" className="menu-sub-link">
                      {item.label}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </li>
        )
      })}
    </menu>
  )
}

export default Menu
