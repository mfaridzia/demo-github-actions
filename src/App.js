import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Test from './Test';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/"> Home</Link>
        <Link to="/test"> Test </Link>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
