import './styles/App.css';
import Dashboard from "./pages/player_dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
     
      <Dashboard />
  
    </Router>
  );
}

export default App;
