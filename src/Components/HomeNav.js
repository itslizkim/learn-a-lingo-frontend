import React from 'react';
import {NavLink} from 'react-router-dom'

const HomeNav = () => {
    return(
        <ul className="homenav">
            <h2>Select a Language</h2>
          <li>
            <NavLink to="/languages/English">English</NavLink>
          </li>
          {/* <li>
            <NavLink to="/languages/Korean">Korean</NavLink>
          </li> */}
        </ul>
    )
}

export default HomeNav;