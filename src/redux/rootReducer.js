import { CREATE_FIRST_ROUND_CARDS,
  CREATE_SECOND_ROUND_CARDS,
  INCREMENT_CLICKS_COUNTER,
  ADD_TO_CLICKED, 
  RESET_CLICKS_COUNTER, 
  RESET_CLICKED, 
  INCREMENT_MATCHES,
  RESET_MATCHES,
  IS_ALERT_VISIBLE,
  REDIRECT
  } from "./types";

const initialState = {
  cards: ['bender', 'mario','scream', 'gomer'],
  isAlertVisible: false,
  clicksCounter: 0,
  clicked: [],
  matches: 0,
}

const thirtySixCards = function()  {
  let thirtySixCards = []
  for (let i = 0; i < 4; i++) {
    thirtySixCards = thirtySixCards.concat(initialState.cards.concat(initialState.cards));
  }
  const twoCards = new Array(initialState.cards[0], initialState.cards[1])
  const fourCards = twoCards.concat(twoCards)
  thirtySixCards = thirtySixCards.concat(fourCards).sort(function(){
    return Math.random() - 0.5;
  });    
  return thirtySixCards
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FIRST_ROUND_CARDS:
      const eightCards = initialState.cards.concat(initialState.cards) 
      const field = eightCards.concat(eightCards).sort(function(){
        return Math.random() - 0.5;
      });    
      return {...state, cards: field}
    case CREATE_SECOND_ROUND_CARDS:
      const secondRoundCards = thirtySixCards()  
      return {...state, cards: secondRoundCards}
    case INCREMENT_CLICKS_COUNTER:
      return {...state, clicksCounter: state.clicksCounter + 1}
    case ADD_TO_CLICKED:
      return {...state, clicked: new Array(!state.clicked ? action.payload : state.clicked[1] = action.payload)}
    case RESET_CLICKS_COUNTER:
      return {...state, clicksCounter: 0}
    case RESET_CLICKED:
      return {...state, clicked: []}
    case INCREMENT_MATCHES:
      return {...state, matches: state.matches + 1}
    case RESET_MATCHES:
      return {...state, matches: 0}
    case IS_ALERT_VISIBLE:
      return {...state, isAlertVisible: action.payload}
    case REDIRECT:
      return {...state, redirect: !state.redirect}
    default: return state
  }

}