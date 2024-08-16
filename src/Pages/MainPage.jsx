import React from 'react';
import { NavLink } from 'react-router-dom';

export const MainPage = () => {

  return (
    <div className="main-page">
      <h1>Tiles Game</h1>
      <NavLink
        className="nav-link"
        to="/game"
        exact
      >
        Press to start
      </NavLink>

    </div>
  )
};
