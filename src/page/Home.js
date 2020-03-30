/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.css';


import VisibleTodoList from '../containers/VisilbleTodoList';
import Header from '../containers/Header';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      <VisibleTodoList />
    </div>
  );
}

export default Home;