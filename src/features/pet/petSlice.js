import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // Your initial state properties
    name: 'Rex',
    happiness: 50,
    hunger: 50,
};

export const petSlice = createSlice({
    name: 'pet',
    initialState,
    reducers: {
        play: (state) => {
            state.happiness += 10;
            state.hunger -= 5;
        },
        feed: (state) => {
            state.hunger += 10;
        },
        reset: (state) => {
            // instead of this 👇
            // return initialState;

            // Use immer to safely mutate the state
            Object.assign(state, initialState);
        }
    },
});

export const { play, feed, reset } = petSlice.actions;
export default petSlice.reducer;