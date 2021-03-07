import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = (linkTo) => {
  return (
    <div>
      <NavLink
        className="navbar__link"
        to="/"
        exact
      >
        {linkTo.title}
      </NavLink>
    </div>
  )
}
  
