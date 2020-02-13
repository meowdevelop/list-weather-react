import * as React from 'react';
import { connect } from 'react-redux';


// Components
import LineComponent from './LineComponent';


class TableComponent extends React.Component {

  render() {

    const { cities } = this.props.store.weather;

    return <div className="table">
        <div className="table__headers">
            <div className="table__header">City</div>
            <div className="table__header">Temp</div>
            <div className="table__header">Press</div>
        </div>
        {cities.map((city) =>
        <LineComponent data={city} />
      )} 
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
)(TableComponent);