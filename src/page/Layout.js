import React from 'react';
import './Layout.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Footer from '../components/Footer';

const Layout = () => {

  return (
    <div className="layout">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>

      {/* <Footer /> */}
    </div>
  )
}


export default Layout;