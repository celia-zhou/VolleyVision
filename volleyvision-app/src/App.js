import './styles/App.css';
import Dashboard from "./pages/player_dashboard";
import Profile from "./pages/profile_page";
import RecruiterTeam from './pages/recruiter_team';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
     
      <Switch>
          <Route path="/Profile" component={Profile} />
      </Switch>

      <Switch>
          <Route path="/RecruiterTeam" component={RecruiterTeam} />
      </Switch>
  
    </Router>
  );
}

export default App;
