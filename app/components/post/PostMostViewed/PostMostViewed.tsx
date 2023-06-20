import { FC } from 'react';
import Link from 'next/link'
import './PostMostViewed.scss';
import { Lora } from 'next/font/google'

const fontLora = Lora({ subsets: ['latin'] })

interface PostMostViewedProps {
  index: number;
}

export const PostMostViewed: FC<PostMostViewedProps> = ({ index }) => {
  return (
    <article className="post-most-viewed">
      <span className={"post-most-viewed__top " + fontLora.className}>{String(index).padStart(2, '0')}</span>
      <div>
        <Link className={"post-most-viewed__title " + fontLora.className} href="/post">How to deal with dificult co-workers</Link>
        <div className="post-most-viewed__details">
          <span className="post-details__date">May 08</span>
          <div className="post-details__viewed-content">
            <img src="images/icons/eye-solid.svg" className="w-4 h-4" />
            <p className={"text-app-gray " + fontLora.className}>21K</p>
          </div>
        </div>
      </div>
    </article>
  )
}