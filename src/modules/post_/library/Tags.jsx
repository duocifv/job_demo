'use client'
import Link from 'next/link'
import React from 'react'

const Tags = ({ initialData }) => {
  return (
    <div>
      <h3 className="text-3xl">Tags</h3>
      <hr />
      {initialData.map((item, index) => {
        const tagUrl = `/posts/tags/${item.slug}`
        return (
          <div key={index}>
            <Link href={tagUrl}>
              {item.name} ({item.count})
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Tags
