import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import { Video } from './'
import { FiSearch } from 'react-icons/fi';

const SearchConts = () => {
  // useState 변수 설정
  const [videos, setVideos] = useState();

  //useParams : 키워드를 받아와서 저장시키는 역할이다.
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => 
      setVideos(data.items)
    )
  },[searchTerm])

  return (
    <>
    <section id='searchConts'>
      <div>
        <h2 className='result'> <FiSearch /> "<em> {searchTerm} </em>" 검색 결과</h2>
        <Video videos={videos}/>
      </div>
    </section>
    </>
    )
}

export default SearchConts
