import {Link} from 'react-router-dom'

import {useState} from 'react'

import './index.css'

const Header = () => {
  const [activeTab, tabChange] = useState('home')

  return (
    <div className="header-cont">
      <div className="logo-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
        <p className="wave">Wave</p>
      </div>
      <div className="list-cont">
        <ul className="route-list">
          <li>
            <Link
              to="/"
              className={`list-item ${activeTab === 'home' ? 'activeTab' : ''}`}
              onClick={() => tabChange('home')}
            >
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="/about"
              className={`list-item ${
                activeTab === 'about' ? 'activeTab' : ''
              }`}
              onClick={() => tabChange('about')}
            >
              About
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="/contact"
              className={`list-item ${
                activeTab === 'contact' ? 'activeTab' : ''
              }`}
              onClick={() => tabChange('contact')}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
