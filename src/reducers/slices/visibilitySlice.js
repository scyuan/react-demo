import { createSlice } from '@reduxjs/toolkit';


const visibilitySlice = createSlice({
  name: 'visibilitySlice',
  initialState: 'ALL',
  reducers: {
    setVisibility: (state, action) => state = action.payload
  }
})

export const { setVisibility } = visibilitySlice.actions;
export const visibilitySliceReducer = visibilitySlice.reducer;
