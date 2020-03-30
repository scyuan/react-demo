import React from 'react';
import Filter from './Filter';
import SlideBar from './SlideBar';
import { connect } from 'react-redux';
const Header = ({ dispatch }) => {
  let input;
  return (
    <div className="header">
      <h2>滴答清单</h2>
      <input className="input"
        ref={node => input = node}
        placeholder="Tel me what you wanna do ?"
        type="text"
        onKeyDown={
          (e) => {
            if (e.keyCode === 13) {
              dispatch({
                type: 'ADD_TODO',
                text: input.value
              })
              input.value = "";
            }
          }
        } />
      <div className="filters">
        <Filter filter="ALL"> 所有 </Filter>
        <Filter filter="COMPLETED"> 已完成 </Filter>
        <Filter filter="NOT_COMPLETED"> 未完成 </Filter>
        <SlideBar />
      </div>

    </div>
  )
}

const mapAddTodoStateToProps = (state) => {
  return {
    sliderBar: state.sliderBar,
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(mapAddTodoStateToProps)(Header);