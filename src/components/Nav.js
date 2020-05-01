import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Nav () {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Log Page
            </NavLink>
          </li>
          <li>
            <NavLink to='/questions' activeClassName='active'>
              All Questions
            </NavLink>
          </li>
          <li>
              <NavLink to='/leaderBoard' activeClassName='active'>
                LeaderBoard
              </NavLink>
          </li>
        </ul>
      </nav>
    )
  }