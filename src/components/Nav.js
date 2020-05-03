import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Nav () {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/log' exact activeClassName='active'>
              Log Page
            </NavLink>
          </li>
          <li>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
              <NavLink to='/leaderboard' activeClassName='active'>
                LeaderBoard
              </NavLink>
          </li>
          <li>
              <NavLink to='/add' activeClassName='active'>
                Add New Question
              </NavLink>
          </li>
        </ul>
      </nav>
    )
  }