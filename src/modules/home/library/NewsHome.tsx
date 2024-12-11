import { postHomeService } from '@/modules/posts/feature/posts.service'
import React from 'react'

const NewsHome = async () => {
  const list = await postHomeService()
  return (
    <div className="pt-16">
      <div className="news">
        <div className='flex justify-center flex-wrap'>
          <div className="news-col flex-grow-0">
            <h2 className="news-title">News</h2>
          </div>
          <div className="news-col">
            <ul className="news-list">
              {list?.map(({ node }, index) => (
                <li className="news-item" key={index}>
                  <a
                    href={`blog/${node?.slug}`}
                    className="news-link"
                    target="_blank"
                  >
                    <span className="news-date">{node?.date}</span>
                    <h4 className="news-copy">{node?.title}</h4>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-full text-right pt-2">
          <a href='#'>View more</a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default NewsHome
