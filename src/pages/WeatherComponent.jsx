import * as React from 'react';
import { connect } from 'react-redux';

//styles


// Components
import TableComponent from '../components/TableComponent';
import SelectComponent from '../components/SelectComponent';


class WeatherComponent extends React.Component {

  render() {

    return <section className="weather-wrapper">
          <SelectComponent/>
          <TableComponent/>
      </section>
     
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
)(WeatherComponent);
