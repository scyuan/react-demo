let toId = 0;
export const todos = (state = [], action) => {
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