import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {MainPage} from './Pages/MainPage';
import {GamePage} from './Pages/GamePage';
import {Alert} from './components/Alert';
import {connect} from 'react-redux';
import { createFirstRoundCards, createSecondRoundCards, isAlertVisible, redirect, resetClicked, resetClicksCounter, resetMatches } from './redux/actions';
import {levelUp, resetGame} from './helpers/helpers';



function App(props) {
 
  const startNewGame = () => {
    resetGame();
    props.dispatch(resetClicksCounter());
    props.dispatch(resetClicked());
    props.dispatch(resetMatches());
    props.dispatch(createFirstRoundCards());
    props.dispatch(redirect());
  };

  const handleClickAlert = () => {
    if (props.matches < 9) {
      levelUp();
      props.dispatch(createSecondRoundCards());
    } else {
      startNewGame();
    }
    props.dispatch(isAlertVisible(false));
  };

  const handleClick = () => {
    startNewGame();
  }

  return (
    <>
      <BrowserRouter>
      {props.isAlertVisible && <Alert matches={props.matches} onClick={handleClickAlert}/>}
          <Switch>
            <Route path={'/'} exact component={MainPage}/> 
            <Route path={'/game'} render = { props => <GamePage onClick={handleClick}/>} />
          </Switch> 
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = state =>{
  return {
    isAlertVisible: state.isAlertVisible,
    matches: state.matches,
    redirect: state.redirect
  };
};

export default connect(mapStateToProps)(App);