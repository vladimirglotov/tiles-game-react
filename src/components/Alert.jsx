import React from 'react'
import { useHistory } from 'react-router-dom'


export const Alert = (props) => {
  let history = useHistory()
  const handleClickAlert = () => {
    props.onClick()
    if (props.matches > 10) {
      history.push('/')
    }
  }
  
  return (
    <div className="popup-wrapper">
      <div className="popup">
        <div className="popup__header">
          <div></div> 
          <div
            className="popup__close-icon"
            onClick={props.onClick}
          >&times;</div>
        </div>
        <div className="popup__content">
          {props.matches < 9 ? 'Вы прошли этот уровень!': 'Ура! Вы выиграли!'}
        </div>
        <div className="popup__footer">
          <button
            className="close_modal"
            onClick={handleClickAlert}
          >Ok</button>
        </div>
      </div>
    </div>
  )
}