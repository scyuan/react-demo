import React from 'react';
import './Layout.css';
import { Link, BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Home from './Home';
import About from './About';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPath: '/'
    };
    // console.log(this.state);
  }
  componentWillMount() {
    this.unlisten = this.props.history.listen((route) => {
      console.log(route);
      this.setState({
        currPath: route.pathname
      })
    })
  }
  render() {
    return (
      <div className="layout">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>

        <div className="menu">
          <Link to="/" className={this.state.currPath === '/' ? 'active' : ''}>首页</Link>
          <Link to="/about" className={this.state.currPath === '/about' ? 'active' : ''}>我的</Link>
        </div>
      </div>
    )
  }
}
export default Layout;