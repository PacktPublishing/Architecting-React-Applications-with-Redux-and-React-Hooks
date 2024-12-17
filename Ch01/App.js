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
