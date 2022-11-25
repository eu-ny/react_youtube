import React from 'react'
import { VideoCard, Loader } from "./"

const Video = ({videos , layout}) => {
  if(!videos?.length) return <Loader />
  return (
    <article className={`videos__inner ${layout}`}>
      {/* {videos.map((item, idx) => (
        <div key={idx}>
          {item.snippet.thumbnails.medium.url}
        </div>
      ))} */}

      {videos.map((item, idx) => (
        <VideoCard key={idx} video={item}  />
      ))}
    </article>
  )
}

export default Video