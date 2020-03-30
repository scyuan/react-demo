import React from 'react';
// 展示组件 - 只负责展示
// 容器组件 - 负责展示和业务逻辑

// 展示组件 - 负责渲染单个todo
const TodoItem = ({ complete, text, onClick }) => {
  return (
    <li
      className={complete ? 'todo-complete' : 'todo-not-complete'}
      onClick={onClick}> {text} </li>
  )
}


// 展示组件 - 负责渲染整个todos
const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul className="todo-ul">
      {
        todos.map(todo => {
          return <TodoItem key={todo.id} onClick={() => toggleTodo(todo.id)} {...todo} />;
        })
      }
    </ul>
  )
}

export default TodoList;
