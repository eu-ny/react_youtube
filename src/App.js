import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { MainConts, VideoConts, ChannelConts, SearchConts, HeaderCont } from './components'
// 아래 컴포넌트가 많아질 경우 index.js를 새로 만들어서 export해준다음 한 번에 불러올 수 있다. 
// import MainConts from './components/MainConts'
// import VideoConts from './components/VideoConts'
// import ChannelConts from './components/ChannelConts'
// import SearchConts from './components/SearchConts'

const App = () => {
  return (
    <BrowserRouter>
    <HeaderCont />
      <Routes>
        <Route path='/' element={<MainConts />}></Route>
        <Route path='/video/:id' element={<VideoConts />}></Route>
        <Route path='/channel/:id' element={<ChannelConts />}></Route>
        <Route path='/search/:Keyword' element={<SearchConts />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
