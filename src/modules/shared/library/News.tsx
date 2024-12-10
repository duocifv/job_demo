import { postHomeService } from '@/modules/posts/feature/posts.service'
import React from 'react'

const News = async () => {
  const list = await postHomeService()
  return (
    <div className="pt-6">
      <div className="cols-news">
        <div className="col">
          <h2 className="news-title">News</h2>
        </div>
        <div className="col">
          <ul className="news">
            {list?.map(({ node }, index) => (
              <li className="news-item" key={index}>
                <a href={`blog/${node?.slug}`} className="new-link" target="_blank">
                  <span className="news-date">{node?.date}</span>
                  <h4 className="news-copy">{node?.title}</h4>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default News
