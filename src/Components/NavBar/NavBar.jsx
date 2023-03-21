import React from 'react'
import { Link } from 'react-router-dom'
import Filter from '../Filter/Filter'
import './NavBar.css'


const NavBar = ({search, ratingFilter}) => {
  return (
    <div className='nav-bar'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='trending'>Trending</Link></li>
            <li><Link to='get-pro'>Get Pro</Link></li>
        </ul>
        <Filter search={search} ratingFilter={ratingFilter}/>
    </div>
  )
}

export default NavBar