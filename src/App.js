import React from 'react';
import './App.css';
import Layout from './page/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

/** 关于redux的几个概念
 *  reducer
 *  action
 */

import { sliderBar } from './reducers/sliderBar';
import { todos } from './reducers/todos';
import { visibilityFilter } from './reducers/visibilityFilter';

// const reducers = combineReducers({ todos, visibilityFilter, sliderBar });
// const store = createStore(reducers);

// 通过@reduxjs/toolkit简化store的管理
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';


// const store = configureStore({
//   reducer: { sliderBar, todos, visibilityFilter }
// })

const store = configureStore({
  reducer: rootReducer
})

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
