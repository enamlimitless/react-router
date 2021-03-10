import './App.css';
import ClubDetail from './Components/ClubDetail/ClubDetail';
import Leagues from './Components/Leagues/Leagues';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
function App() {
  return (
    <div>
      
      {/* <ClubDetail></ClubDetail> */}
      <Router>
        <Switch>
        <Route path='/club/:idLeague'>
            <ClubDetail></ClubDetail>
        </Route>
          <Route exact path='/'>
            <Leagues></Leagues>
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
