import React from 'react';

import { Link, withRouter } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className="menu">
      <Link to="/" className={props.location.pathname === '/' ? 'active' : ''}>首页</Link>
      <Link to="/about" className={props.location.pathname === '/about' ? 'active' : ''}>我的</Link>
    </div>
  )
}

export default withRouter(Footer);