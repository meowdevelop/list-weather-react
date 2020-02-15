import * as React from 'react';
import { connect } from 'react-redux';

// Components
import LineComponent from './LineComponent';

class TableComponent extends React.Component {

  reverseCities = (cities) => {
    cities.reverse();
    this.props.updateState('ADD_NEW_CITY', cities);
  }

  render() {

    const { cities } = this.props.store.weather;

    return <div className="table">
        <div className="table__headers">
            <div className="table__header table__header--city" onClick = {() => this.reverseCities(cities)}>City</div>
            <div className="table__header">Temp</div>
            <div className="table__header">Press</div>
        </div>
        {cities.length === 0 ? (<p className="table__comment">Добавьте город</p>) : null}
        {cities.map((city) =>
        <LineComponent data={city} key={city.city}/>
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