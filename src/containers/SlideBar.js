import SlideBar from '../components/SlideBar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    sliderBar: state.sliderBar
  }
}

export default connect(mapStateToProps)(SlideBar);