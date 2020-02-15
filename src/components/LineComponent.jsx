import * as React from 'react';
import { connect } from 'react-redux';


// Components
import DeleteButton from './DeleteButton';


class LineComponent extends React.Component {

  deleteCity = (city) => {
    this.props.updateState('SET_DELETE_CITY', city);
  }

  render() {
      
    return <div className='line table__line'>
        <div className='line__city line__item'>{this.props.data.city}</div>
        <div className='line__temp line__item'>{this.props.data.temp}</div>
        <div className='line__press line__item'>{this.props.data.press}</div>
        <DeleteButton onClick={() => this.deleteCity(this.props.data.city)}/>
    </div>
  }
}

export default connect(
  state => ({
    store: state,
  }),
  dispatch => ({
    updateState: (type, payload) => {
      dispatch({ type, payload });
    },
  }),
)(LineComponent);