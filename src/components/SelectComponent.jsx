import * as React from 'react';
import { connect } from 'react-redux';

// Components
import AddingButton from './AddingButton';
import SelectForm from './SelectForm';

class SelectComponent extends React.Component {

  state = {
    selectedCity: 'Samara',
    isFetching: true, 
    error: null,
    result: null
  };

  onCityChange = event =>
    this.setState({
      selectedCity: event.target.value
    });

  pushNewCity = (result, city) => {
    const { cities, cache } = this.props.store.weather;
    const addedCity = {
      city: city,
      temp: `${Math.round(result.main.temp)} °C`,
      press: `${result.main.pressure} мм.рт.ст.`
  }
    cities.push (addedCity);
    cache.push (addedCity);
  
    this.props.updateState('ADD_NEW_CITY', cities);
    this.props.updateState('ADD_IN_CACHE', cache);
    console.log(cache);
  
  }

  checkCities = (city, arrayCities) => {
    let searchedCity = null;
    arrayCities.forEach(item => {
      if(item.city === city) {
        searchedCity = item;
      }
    });
    return searchedCity;
  }
  
  getWeather = (city) => {
    const { cities, cache } = this.props.store.weather;
    const addedCity = this.checkCities(city, cities);
    const cacheCity = this.checkCities(city, cache);
    if(addedCity) {
      return;
    }
    if(cacheCity) {
      cities.push(cacheCity);
      this.props.updateState('ADD_NEW_CITY', cities);
      return;
    }
    this.setState({...this.state, isFetching: true})
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1a41c172ff507739c60bfc6560e8337b&units=metric`)
      .then(response => response.json())
      .then(result => {
        this.setState({...this.state, isFetching: false, result: result});
        this.pushNewCity(result, city);
      })
      .catch(e => {
        console.log(e);
        this.setState({isFetching: false, error: e });
      });
  }

  render() {
      
    return <div className="select-line">
      <SelectForm value={this.state.selectedCity} onChange={this.onCityChange}/>
      <AddingButton onClick = {() => this.getWeather(this.state.selectedCity)}/>
       {this.state.error ? (<p>{this.state.result.message}</p>) : null}
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