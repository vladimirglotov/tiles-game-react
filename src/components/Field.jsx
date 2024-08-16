import React from 'react';
import {connect} from 'react-redux';
import { incrementClicksCounter, incrementMatches, resetClicked, resetClicksCounter, isAlertVisible } from '../redux/actions';
import classnames from 'classnames';
import {removeClickedClass, addClickedClass} from '../helpers/helpers';

function Field (props) {

  const annihilateCards = () => {
    // this.playSound('done');
    setTimeout(() => { 
    //убираем видимость совпавших карточек и добавляем взамен пустые окна, делаем их некликабельными
      let cardsToDelete = document.querySelectorAll('.flipper');

      for (let i = 0; i < cardsToDelete.length; i++) {
        if (cardsToDelete[i].parentNode.classList.contains('clicked')) {
          let emptyCards = document.createElement("section");

          cardsToDelete[i].parentNode.classList.add('no-click');
          cardsToDelete[i].parentNode.insertBefore(emptyCards, cardsToDelete[i]);
          cardsToDelete[i].style.display = 'none';
        }
      }

      //сброс переменных для следующего хода
      props.dispatch(resetClicked());
      removeClickedClass();
      props.dispatch(resetClicksCounter());
    }, 500);
  };

  const openCard = (e) => {
      //проверка на кликабельность
    if (!e.target.classList.contains('no-click') && e.target.tagName !== 'SECTION') {

      //проверка на порядковый номер клика и завепшенность удаления классов при неверном выборе
      if (props.store.clicksCounter === 0 && props.store.clicked.length === 0) {
        addClickedClass(e, props);
        console.log('первый клик');
      } else if (props.store.clicksCounter === 1 && !e.target.parentNode.parentNode.classList.contains('clicked') && props.store.clicked.length === 1) {
        console.log('второй клик');
        addClickedClass(e, props);

        //проверка на совпадение одиновых карточек
        if (props.store.clicked[0] === props.store.clicked[1]) {
          annihilateCards();
          props.dispatch(incrementMatches());

          //проверка на завершенность уровня и возможную победу
          if (props.store.matches === 7) {
            props.dispatch(isAlertVisible(true));
          }
          if (props.store.matches === 25) {
            // this.playSound('win');
            setTimeout(() => {
              props.dispatch(isAlertVisible(true));
            }, 1000);
          }
        } else {

          //после задержки прячем картинку обратно, чтобы ее можно было успеть увидеть
          console.log('неверный выбор');
          props.dispatch(incrementClicksCounter());
          setTimeout(() => {  
            removeClickedClass();
            props.dispatch(resetClicksCounter());
          }, 500);
          props.dispatch(resetClicked());
        }
      }
    }
  };

  return (
    <div className={classnames('field', { 'wide': props.store.cards.length > 16 && props.store.matches > 7})}>
      {props.store.cards.map((card, i) => {
        return (
          <div
            key={i}
            className={classnames('card', card)}
            data-name={card}
          >
            <div 
              className="flip-container"
              onClick={openCard}
            >
              <div className="flipper">
                <div className="front">
                </div>
                <div className="back">
                <img alt="pics of my imagine friends"src={`/img/${card}.png`}></img>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
};

const mapStateToProps = state =>{
  return {
    store: state
  }
};

export default connect(mapStateToProps)(Field);