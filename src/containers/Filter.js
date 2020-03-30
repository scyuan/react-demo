import Filter from '../components/Filter';
import { connect } from 'react-redux';
import { setVisibility } from '../reducers/slices/visibilitySlice';
import { setSliderBar } from '../reducers/slices/sliderBar';


const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (e) => {
      dispatch(setVisibility(ownProps.filter));
      dispatch(setSliderBar(e.target.offsetLeft))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);