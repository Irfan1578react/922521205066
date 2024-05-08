import React from 'react'
import {Link} from "react-router-dom"
const Nav = ({search,setSearch}) => {
  return (
    <div>
        <form className='form' onSubmit={(e) => {e.preventDefault()}}>
            <label htmlFor='search'>Search</label>
            <input id="search" type="text" placeholder='search Posts
            ' value={search} onChange={(e) => {setSearch(e.target.value)}}></input>
        </form>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='posts'>Post</Link></li>
            <li><Link to='about'>About</Link></li>
        </ul>
      
    </div>
  )
}

export default Nav
