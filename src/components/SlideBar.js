import React from 'react';


const SlideBar = ({ sliderBar }) => {
  return (
    <div className="slide-bar" style={{ left: sliderBar + 'px' }}></div >
  )
}

export default SlideBar;