import Filter from '../components/Filter';
import { connect } from 'react-redux';

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
const setSlideBar = (slide) => {
  return {
    type: 'SET_SLIDER_BAR',
    slide
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      dispatch(setVisibilityFilter(ownProps.filter));
      dispatch(setSlideBar(e.target.offsetLeft))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);