import * as React from 'react';
import { connect } from 'react-redux';


class DeleteComponent extends React.Component {

  render() {
      
    return <button className="line__item delete-btn" onClick={() => this.props.updateState('SET_DELETE_CITY', this.props.city)} >
        &times;
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
)(DeleteComponent);