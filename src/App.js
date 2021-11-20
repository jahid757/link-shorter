import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import Login from './components/Login';
import LinkList from './components/pages/LinkList';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/link" component={LinkList}/>
        <Route path="/:link" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
