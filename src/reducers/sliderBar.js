// reducer 3
export const sliderBar = (state = 2, action) => {
 switch (action.type) {
  case 'SET_SLIDER_BAR':
   return action.slide
  default:
   return state
 }
}
