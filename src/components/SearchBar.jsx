import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
// import { SlGameController } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onkeyPress = (e) => {
    if( e.charCode === 13) {
      handleSearch()
    }
  }

  // 주소 넘겨주기 get방식과 동일
  const handleSearch = () => {

    if(searchTerm) {
      navigate(`/search/${searchTerm}`)
    }
    setSearchTerm('')
  }

  return (
    <div className="search" onKeyPress={onkeyPress}>
        <label htmlFor="searchInput" className="glass">
            <FiSearch />
        </label>
        <input
            type="text"
            id="searchInput"
            className="input__search"
            placeholder="원하는 음악을 검색하세요!"
            title="search"
            // value값에 공백이 있으면 오류가 생기므로 공백 없애기
            value={searchTerm || ''}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>
  )
}

export default SearchBar