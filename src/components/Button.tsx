import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

export const ButtonGroup: FC<{
  children?: ReactNode
}> = (p) => {
  return <div className="button-group">{p.children}</div>
}

export const Button: FC<{
  className?: string
  copy?: ReactNode | string
  variant?: 'secondary' | 'buy' | 'tertiary' | 'light'
}> = (p) => {
  return (
    p.copy && (
      <button
        className={classNames(
          'button',
          p.variant === 'light' && `button-light`,
          p.variant === 'tertiary' && `button-tertiary`,
          p.variant === 'secondary' && `button-secondary`,
          p.variant === 'buy' && `button-buy`,
          p.className
        )}
      >
        {p.copy}
      </button>
    )
  )
}
