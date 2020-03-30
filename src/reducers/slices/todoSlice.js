import { createSlice } from '@reduxjs/toolkit';

let todoId = 0;

const todoSlice = createSlice({
  name: 'todoAppSlice',
  initialState: [],
  reducers: {
    // 正确写法一
    addTodo: (state, action) => {
      state.push({ text: action.payload, complete: false, id: todoId++ })
    },
    // 正确写法二
    addTodo1: (state, action) => {
      return [...state, { text: action.payload, complete: false, id: todoId++ }]
    },
    // 正确写法三
    addTodo3: (state, action) => [...state, { text: action.payload, complete: false, id: todoId++ }],
    // 错误写法
    addTodoError: (state, action) => state.push({ text: action.payload, complete: false, id: todoId++ }),

    toggleTodo: (state, action) => {
      state[action.payload].complete = !state[action.payload].complete
    },
  }
})

/**
 * 关于上面的声明
 * 正确二和正确三的相同点：都是返回了一个新的状态来修改draftState。
 * 错误的写法会报错：箭头函数不加{}会直接返回第一条语句的值，加了{}之后需要手动return
 * Uncaught Error: [Immer] An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.
 * 基于immer的reducer函数要么返回一个新的state去覆盖修改原有的state。或者直接修改state本身
 */

export const { addTodo, toggleTodo } = todoSlice.actions;
export const todosReducer = todoSlice.reducer;