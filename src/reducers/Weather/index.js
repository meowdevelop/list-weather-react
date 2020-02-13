const initialState = {
    cities:  [
      {
        city: 'Samara',
        temp: '+25',
        press: '11'
      },
      {
        city: 'Moscow',
        temp: '+25',
        press: '11'
      },
      {
        city: 'Piter',
        temp: '+25',
        press: '11'
      },
    
    ],
  };
  
  const weather = (state = initialState, { type, payload }) => {
    switch (type) {
      case 'SET_DELETE_CITY':
        return {
          ...state,
          cities: state.cities.filter(item => item.city !== payload)
        };
      case 'ADD_NEW_CITY':
        return {
          ...state,
          cities: payload
        };
      
  
      default:
        return state;
    }
  };
  
  export default weather;
  