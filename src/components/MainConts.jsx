import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../utils/fetchAPI'
import { Category, Video } from './'

const MainConts = () => {
  // 변수 만들기
  const [selectCategory, setSelectCategory] = useState('Music')
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=music player`).then((data) =>
      console.log(data)
    )
  }, [])

  return (
    <main id="main">
      <aside id="aside">
        {/* 변수(selectCategory)와 함수(setSelectCategory) 개념으로 생각하기 : category에 값 전달. */}
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contetns">
        {/* category에서 받아온 데이터 값을 아래에 뿌려준다. (title과 비슷.) */}
        <h2>
          ✦ PlayList <em>{selectCategory}</em>
        </h2>
        <Video videos={videos} />
      </section>
    </main>
  )
}

export default MainConts
