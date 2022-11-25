// import React, {useEffect, useState} from 'react'
// import ReactPlayer from 'react-player'
// import { useParams } from 'react-router-dom'
// import { fetchAPI } from '../utils/fetchAPI'
// import { Video } from "./"

// const VideoConts = () => {
//   const [videoDetail, setVideoDetail] = useState(null)
//   const [videos, setVideos] = useState(null);
//   const { id } = useParams()

//   useEffect(() => {
//     fetchAPI(`videos?part=snippet,statistics&id=${id}`)
//     .then((data) => setVideoDetail(data.items[0]))
//     fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
//     .then((data) => setVideos(data.items))
//   }, [id]);

//   const { snippet : {title, channelTitle}, statistics: viewCount, likeCount } = videoDetail

//   return (
//     <section id="videoConts">
// 		<div className="video__inner">
// 			<div className="left">
// 				<div className="video__play">
// 					<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
// 				</div>
// 				<div className="video__desc">
//           <div className="titie">
//             <span className='channelTitle'>{channelTitle}</span>
//             <h2 className='video__title'>{title}</h2>
//           </div>
//           <div className='desc'>
//             <div className="viewCount">{viewCount}</div>
//             <div className="likeCount">{viewCount}</div>
//           </div>
//         </div>
// 			</div>
// 			<div className="right">
//         <Video videos={videos} layout="column"/>
//       </div>
// 		</div>
//     </section>
//   )
// }

// export default VideoConts

import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Video, Loader } from './'
import { SlLike } from 'react-icons/sl'

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    )

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    )
  }, [id])

  if (!videoDetail?.snippet) return <Loader />

  const { snippet : { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

  return (
    <section id="videoConts">
      <div className="video__inner">
        <div className="left">
          <div className="video__play">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
          </div>
          <div className="video__desc">
            {/* <span className="title">{title}</span>
            <Link to={`./channel/${channelId}`} className="channelTitle">{channelTitle}</Link> */}
            <h2 className="title">{title}</h2>
            <div className="channel">
              <Link to={`./channel/${channelId}`} className="channelTitle">
                {channelTitle}
              </Link>
              <div className="desc">
                <span className="view">조회수 : {viewCount}</span>
                <span className="like">
                  <SlLike className="icon" />
                  {likeCount}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          {/* layout = 변수 / column = 변수 값 */}
          <Video videos={videos} layout="column" />
        </div>
      </div>
    </section>
  )
}

export default VideoConts
