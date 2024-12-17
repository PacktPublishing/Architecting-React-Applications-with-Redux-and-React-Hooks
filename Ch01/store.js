// src/store.js
import { createStore } from 'redux';

const initialState = {
  name: 'Max',
  happiness: 10,
  hunger: 5
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PET_NAME_CHANGE':
      return { 
        ...state, 
        name: action.payload 
      };
    case 'PET_FEED':
      return { 
        ...state, 
        hunger: Math.max(state.hunger - 1, 0) 
      };
    case 'PET_PLAY':
      return { 
        ...state, 
        happiness: Math.min(state.happiness + 1, 20) 
      };
    default:
      return state;
  }
};

const store = createStore(petReducer);
export default store;
