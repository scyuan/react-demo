import { combineReducers } from '@reduxjs/toolkit';

import { sliderBarReducer } from './slices/sliderBar';
import { todosReducer } from './slices/todoSlice';
import { visibilitySliceReducer } from './slices/visibilitySlice';

export const rootReducer = combineReducers({
  todos: todosReducer,
  sliderBar: sliderBarReducer,
  visibilityFilter: visibilitySliceReducer
})