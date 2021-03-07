import { CREATE_FIRST_ROUND_CARDS,
  CREATE_SECOND_ROUND_CARDS,
  INCREMENT_CLICKS_COUNTER ,
  ADD_TO_CLICKED,
  RESET_CLICKS_COUNTER,
  RESET_CLICKED,
  INCREMENT_MATCHES,
  RESET_MATCHES,
  IS_ALERT_VISIBLE,
  REDIRECT} from "./types";

export function createFirstRoundCards() {
  return {
    type: CREATE_FIRST_ROUND_CARDS
  }
}
export function createSecondRoundCards() {
  return {
    type: CREATE_SECOND_ROUND_CARDS
  }
}
export function incrementClicksCounter() {
  return {
    type: INCREMENT_CLICKS_COUNTER
  }
}

export function addToClicked(payload) {
  return {
    type: ADD_TO_CLICKED,
    payload
  }
}

export function resetClicksCounter() {
  return {
    type: RESET_CLICKS_COUNTER
  }
}

export function resetClicked() {
  return {
    type: RESET_CLICKED
  }
}

export function incrementMatches() {
  return {
    type: INCREMENT_MATCHES
  }
}

export function resetMatches() {
  return {
    type: RESET_MATCHES
  }
}

export function isAlertVisible(payload) {
  return {
    type: IS_ALERT_VISIBLE,
    payload
  }
}

export function redirect() {
  return {
    type: REDIRECT
  }
}
