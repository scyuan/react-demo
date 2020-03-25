import React from 'react';
import './Home.css';
import { useRouteMatch } from 'react-router-dom';

function TodoItem(props) {
  const item = props.item;
  const { content, status } = item;
  const itemClass = status ? 'todo-complete' : 'todo-not-complete'
  function handleStatusChange() {
    props.onStatusChange(props.index);
  }
  return (
    <li className={itemClass} onClick={handleStatusChange}> {content} </li>
  );
}

function TodoList(props) {
  const list = props.list;
  const listItems = list.map((item, index) => {
    return <TodoItem item={item} key={index} index={index} onStatusChange={handleStatusChange} />;
  })
  function handleStatusChange(index) {
    props.onStatusChange(index);
  }
  return (
    <ul className="todo-ul"> {listItems} </ul>
  )
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }
  handleKeyDown(e) {
    e = window.event || e;
    if (e.keyCode === 13) {
      let list = this.state.list;
      list.push({
        status: 0,
        content: e.target.value
      })
      this.setState({
        list: list
      })
      e.target.value = "";
    }
  }
  handleStatusChange(index) {
    let list = this.state.list;
    list[index].status = list[index].status ? 0 : 1;
    list.sort((a, b) => { return a.status - b.status });
    this.setState({
      list: list
    })
  }
  render() {

    return (
      <div className="Home">
        <input className="input" type="text" onKeyDown={this.handleKeyDown} />
        <TodoList list={this.state.list} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
}