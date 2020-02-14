import * as React from 'react';
import { connect } from 'react-redux';

// Components
import TableComponent from '../components/TableComponent';
import SelectComponent from '../components/SelectComponent';


class WeatherComponent extends React.Component {

  render() {

    return <main className="main">
         <section className="weather-wrapper">
            <SelectComponent/>
            <TableComponent/>
          </section>
      </main>
     
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
