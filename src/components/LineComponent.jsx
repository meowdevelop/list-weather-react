import * as React from 'react';
import { connect } from 'react-redux';

//styles


// Components
import DeleteComponent from './DeleteComponent';


class LineComponent extends React.Component {


  render() {
      
    return <div className='line table__line'>
        <div className='line__city line__item'>{this.props.data.city}</div>
        <div className='line__temp line__item'>{this.props.data.temp}</div>
        <div className='line__press line__item'>{this.props.data.press}</div>
        <DeleteComponent city={this.props.data.city}/>
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