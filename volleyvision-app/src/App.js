//import npm
//import slogo from './images/logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

//import pages
import Home from './pages/home';
import Login from './pages/login';
import fourohfour from './pages/404';
import Player_Dashboard from './pages/player_dashboard';
import Coach_Dashboard from './pages/coach_dashboard';
import Videos from './pages/video_page';

//import components
//import { fb } from './components/firebaseConfig';

//import styles
import './styles/App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path= "/home" component={Home} />
          <Route path= "/404" component={fourohfour} />
          <Route path= "/login" component={Login} />
          <Route path="/player_dashboard" component={Player_Dashboard} />
          <Route path="/coach_dashboard" component={Coach_Dashboard} />
          <Route path='/videos' component={Videos}/>
          <Route path="/">
            <Redirect exact from="/" to = "/home"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
