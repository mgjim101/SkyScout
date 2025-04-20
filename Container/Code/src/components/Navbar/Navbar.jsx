import './Navbar.css'
import React from 'react'
import {Link} from 'react-router-dom'
import searchIcon from '../../assets/Search.png'
import bellIcon from '../../assets/Notification.png'
import userIcon from '../../assets/Male User.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <p className="logo">SkyScout</p>
        <div className="searchBar">
          <input type="text" className="search-input" placeholder="Search City" />
          <button className="search-button">
            <img src={searchIcon} alt="search-icon" className="search-icon"/>
          </button>
        </div>
        <div className="right-section">
          <div className="notifications">
            <img src={bellIcon} alt="bell-icon" className="bell-icon"/>
          </div>
          <a href="" className="user">
            <img src={userIcon} alt="user-icon" className="user-icon"/>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
