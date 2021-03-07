import React from 'react';
import { NavLink } from 'react-router-dom';
import Field from '../components/Field'

export const GamePage = (props) => {
  return (
    <div className="game-page">
      <Field />
      <NavLink
        className="nav-link"
        to="/"
        exact
      >
        <span onClick={() => props.onClick()}>Start new game</span>
      </NavLink>
    </div>
  )
}
