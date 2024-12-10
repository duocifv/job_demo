import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'

const Cols: FC<{
  data: ReactNode[]
  className?: string
}> = (p) => {
  return (
    <div className="text-sm">
      <ul className={clsx(p.className, 'flex mx-auto')}>
        {p.data?.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Cols
