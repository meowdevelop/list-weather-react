import * as React from 'react';
import { connect } from 'react-redux';


// Components
import AddingButton from './AddingButton';

class SelectComponent extends React.Component {

  state = {
    selectedCity: 'Samara',
    isFetching: true, 
    error: null
  };

  onCityChange = event =>
    this.setState({
      selectedCity: event.target.value
    });

   
  
  pushNewCity = (result, city) => {
    console.log('ghbdtn');
    const { cities } = this.props.store.weather;
    cities.push ({
        city: city,
        temp: `${result.main.temp}`,
        press: `${result.main.pressure}`
    });
  
    this.props.updateState('ADD_NEW_CITY', cities);
  
  }
  
  getWeather = (city) => {
    this.setState({...this.state, isFetching: true})
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1a41c172ff507739c60bfc6560e8337b`)
      .then(response => response.json())
      .then(result => {
        this.pushNewCity(result, city);
        this.setState({...this.state, isFetching: false});
      })
      .catch(e => {
        console.log(e);
        this.setState({isFetching: false, error: e });
      });
  }

  render() {
      
    return <div className="select-line">
      <div className='select-wrap'>
        <select value={this.state.selectedCity} className='select' onChange={this.onCityChange}>
          <option value='Samara'>Самара</option>
          <option value='Moscow'>Москва</option>
          <option value='Kazan'>Казань</option>
        </select>
      </div>
      <AddingButton city = {this.state.selectedCity} onClick = {this.getWeather}/>
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
)(SelectComponent);