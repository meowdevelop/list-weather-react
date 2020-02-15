const initialState = {
    cities:  [],
    cache: [],
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
      case 'ADD_IN_CACHE':
        return {
          ...state,
          cache: payload
        };
      
      default:
        return state;
    }
  };
  
  export default weather;
  