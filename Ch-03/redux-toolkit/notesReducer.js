// src/reducers/notesReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    notes: [],
};

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload);
        },
        // Other reducers...
    },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;