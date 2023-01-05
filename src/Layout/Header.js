import React from 'react'
import { Link } from 'react-router-dom'
import './../Layout/Header.scss'
export default function Header() {
  return (
    <div className='header'>
        <div className="row">
            <div class="logo">
              <p className="logo-font">JoseGomez</p>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
        </div>
    </div>
  )
}
