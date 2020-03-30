import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { toggleTodo } from '../reducers/slices/todoSlice';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "ALL":
      return todos
    case 'COMPLETED':
      return todos.filter(t => t.complete)
    case 'NOT_COMPLETED':
      return todos.filter(t => !t.complete)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: id => dispatch(toggleTodo(id))
  }
}

// actions
// const toggleTodo = (id) => {
//   return {
//     type: 'TOGGLE_TODO',
//     id
//   }
// }

// 容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
