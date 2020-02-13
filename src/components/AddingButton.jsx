import * as React from 'react';
import { connect } from 'react-redux';

// Components


class AddingButton extends React.Component {

  
addWeather = () => {
  this.props.onClick(this.props.city);
}

  render() {
      
    return <button className="add-btn select-line__add-btn" onClick={() => this.addWeather()}>
        +
    </button>
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
)(AddingButton);