import React from 'react';
import './App.css';
import Home from './page/Home';
import About from './page/About';
import Layout from './page/Layout';

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, Redirect } from 'react-router-dom'


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Layout}></Route>
          </Switch>
        </Router>
      </div >
    )
  }
}

export default App;
