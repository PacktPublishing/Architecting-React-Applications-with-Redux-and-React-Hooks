// src/reducers/notes.js
import { ADD_NOTE, DELETE_NOTE } from '../actions';

const initialState = {
    notesList: [],
};

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            const newNote = {
                id: state.notesList.length + 1, // Replace with UUID or unique ID generator
                title: action.payload.title,
                content: action.payload.content,
            };
            return {
                ...state,
                notesList: [...state.notesList, newNote],
            };
        case DELETE_NOTE:
            return {
                ...state,
                notesList: state.notesList.filter((note) => note.id !== action.payload.id),
            };
        default:
            return state;
    }
};

export default notesReducer;