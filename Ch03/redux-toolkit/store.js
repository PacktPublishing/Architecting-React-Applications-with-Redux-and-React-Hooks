// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './reducers/notesReducer';

const store = configureStore({
    reducer: {
        notes: notesReducer,
    },
});

export default store;