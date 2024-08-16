import { addToClicked, incrementClicksCounter} from '../redux/actions';

export  const resetGame = () => {
  let deletedCards = document.querySelectorAll('.flipper');
  let emptyCards = document.querySelectorAll("section");

  for (let i = 0; i < emptyCards.length; i++) {
    deletedCards[i].parentNode.classList.remove('no-click');
    emptyCards[i].remove();
    deletedCards[i].style.display ? deletedCards[i].style.display = 'block' : void 0;   
  }
};

export const levelUp = () => {
  let deletedCards = document.querySelectorAll('.flipper');
  let emptyCards = document.querySelectorAll("section");
  for (let i = 0; i < emptyCards.length; i++) {
    deletedCards[i].parentNode.classList.remove('no-click');
    emptyCards[i].remove();
    deletedCards[i].style.display ? deletedCards[i].style.display = 'block' : void 0;   
  }
}

export const removeClickedClass = () => {
  let clickedCards = document.querySelectorAll('.clicked');
  for (let i = 0; i < clickedCards.length; i++) {
  clickedCards[i].classList.remove('clicked');
  }
}

export const addClickedClass = (e, props) => {
  let item = e.target.parentNode.parentNode.parentNode.dataset.name;
  props.dispatch(addToClicked(item));
  e.target.parentNode.parentNode.classList.add('clicked');
  props.dispatch(incrementClicksCounter());
}