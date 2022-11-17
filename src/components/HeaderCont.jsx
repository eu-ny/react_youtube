import React from 'react'
import { SearchBar } from './index.js'
import { Link } from 'react-router-dom'
import { AiFillYoutube } from 'react-icons/ai';

const HeaderCont = () => {
  return (
    <header id="header">
        <h1 className="logo">
          <Link to="/">
            <AiFillYoutube className='icon' />Music Player
          </Link>
        </h1>
        <SearchBar />
    </header>
  )
}

export default HeaderCont
