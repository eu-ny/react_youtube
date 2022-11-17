import React, {useEffect, useState} from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))
    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  }, [id]);

  // const { snippet : {title, channelId, channelTitle}, statistics: viewCount, likeCount } = videoDetail

  return (
    <section id="videoConts">
		<div className="video__inner">
			<div className="left">
				<div className="video__play">
					<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
				</div>
				<div className="video__desc">설명입니당</div>
			</div>
			<div className="right"></div>
		</div>
    </section>
  )
}

export default VideoConts