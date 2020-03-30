// reducer 2
export const visibilityFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state;
  }
}
