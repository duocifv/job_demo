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
  variant?: 'secondary' | 'buy'
}> = (p) => {
  return (
    p.copy && (
      <button
        className={classNames(
          'button',
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
