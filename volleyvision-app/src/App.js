//import npm
//import slogo from './images/logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

//import pages
import Home from './pages/home';
import fourohfour from './pages/404';

//import components
//import { fb } from './components/firebaseConfig';

//import styles
//import './styles/App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to = "/home" component={Home} />
          </Route>
          <Route path= "/404" component={fourohfour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
