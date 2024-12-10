"use client"
import React, { useState } from 'react'

const Information = () => {
  return (
    <div className="max-w-[800px] mx-auto ">
      <h2>Information</h2>
      <div>
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Information

const Item = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="p-4 bg-white relative border-b-2">
      <button className="absolute right-4">{open ? '+' : '-'}</button>
      <h4 className="text-center mb-4 text-lg font-bold" onClick={() => setOpen(!open)}>施設概要</h4>
      {open && (
        <ul className="mx-auto w-2/4">
          <li className="flex w-full">
            <span className="font-bold w-20">名称</span>
            <span>御宿 敷島館</span>
          </li>
          <li className="flex w-full">
            <span className="font-bold w-20">住所</span>
            <span>〒766-0001 香川県仲多度郡琴平町川西713-1</span>
          </li>
          <li className="flex">
            <span className="font-bold w-20">TEL</span>
            <span>0877-58-8005</span>
          </li>
          <li className="flex">
            <span className="font-bold w-20">FAX</span>
            <span>0877-58-8007</span>
          </li>
        </ul>
      )}
    </div>
  )
}
