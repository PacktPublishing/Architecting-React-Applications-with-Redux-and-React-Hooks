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
