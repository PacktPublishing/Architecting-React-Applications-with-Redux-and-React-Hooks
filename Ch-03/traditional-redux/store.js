// src/store.js
import { createStore, combineReducers } from 'redux';
import notesReducer from './reducers/notes';

const rootReducer = combineReducers({
    notes: notesReducer,
});

const store = createStore(rootReducer);
export default store;
