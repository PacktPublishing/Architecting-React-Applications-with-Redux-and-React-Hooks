/* Directory Structure
src/
├── index.js           # Entry point with Redux Provider setup
├── App.js             # Main application component
├── store.js           # Redux store configuration
├── actions.js         # Action creators
└── styles.css         # Optional styling
*/

/*
 To setup the example

1. Create a new React project:
npx create-react-app virtual-pet-redux
cd virtual-pet-redux

2. install dependencies
npm install redux react-redux

3. Create the file structure as shown above and copy the code into respective files
Start the development server with the following command: 
npm start

 */

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './styles.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

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

// src/actions.js
export const changePetName = (newName) => ({
  type: 'PET_NAME_CHANGE',
  payload: newName
});

export const feedPet = () => ({
  type: 'PET_FEED'
});

export const playWithPet = () => ({
  type: 'PET_PLAY'
});

// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePetName, feedPet, playWithPet } from './actions';

const App = () => {
  const pet = useSelector(state => state);
  const dispatch = useDispatch();

  const handleNameChange = (newName) => {
    dispatch(changePetName(newName));
  };

  const handleFeedPet = () => {
    dispatch(feedPet());
  };

  const handlePlayWithPet = () => {
    dispatch(playWithPet());
  };

  return (
    <div className="virtual-pet-container">
      <h2>Virtual Pet Dashboard</h2>
      <div className="pet-stats">
        <p>Name: {pet.name}</p>
        <p>Happiness Level: {pet.happiness}</p>
        <p>Hunger Level: {pet.hunger}</p>
      </div>
      <div className="pet-controls">
        <input 
          type="text" 
          placeholder="New pet name"
          onChange={(e) => handleNameChange(e.target.value)}
        />
        <button onClick={handleFeedPet}>Feed Pet</button>
        <button onClick={handlePlayWithPet}>Play with Pet</button>
      </div>
    </div>
  );
};

export default App;

// src/styles.css
.virtual-pet-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.pet-stats {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.pet-controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
}

.pet-controls button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #764ABC;
  color: white;
  cursor: pointer;
}

.pet-controls button:hover {
  background-color: #593d8f;
}

.pet-controls input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
