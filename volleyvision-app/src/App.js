//import npm
//import slogo from './images/logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

//import pages
import Home from './pages/home';
import Fourohfour from './pages/404';
import Dashboard from './pages/player_dashboard';
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
          {/* <Route path= "/home" component={Home} />
          <Route path= "/404" component={Fourohfour} /> */}
          {/* <Route path="/">
            <Redirect exact from="/" to = "/home"/>
          </Route> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path='/videos' component={Videos}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
