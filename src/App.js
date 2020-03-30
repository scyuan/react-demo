import React from 'react';
import './App.css';
import Layout from './page/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { combineReducers, createStore } from 'redux';

import { Provider } from 'react-redux';

let toId = 0;

// reducer 1
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: toId++,
          text: action.text,
          complete: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id === action.id) todo.complete = !todo.complete;
        return todo;
      })
    default:
      return state;
  }
}
// reducer 2
const visibilityFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state;
  }
}

// reducer 3
const sliderBar = (state = 2, action) => {
  switch (action.type) {
    case 'SET_SLIDER_BAR':
      return action.slide
    default:
      return state
  }
}

const reducers = combineReducers({ todos, visibilityFilter, sliderBar });
const store = createStore(reducers);

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/" component={Layout}></Route>
            </Switch>
          </Router>
        </div >
      </Provider>
    )
  }
}

export default App;
