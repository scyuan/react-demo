import { createSlice } from '@reduxjs/toolkit';

const sliderBarSlice = createSlice({
  name: 'sliderSlice',
  initialState: 2,
  reducers: {
    setSliderBar: (state, action) => state = action.payload
  }
})

export const { setSliderBar } = sliderBarSlice.actions;
export const sliderBarReducer = sliderBarSlice.reducer;