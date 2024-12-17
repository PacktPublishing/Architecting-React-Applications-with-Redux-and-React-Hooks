// src/actions.js
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = (title, content) => ({
    type: ADD_NOTE,
    payload: { title, content },
});

export const deleteNote = (id) => ({
    type: DELETE_NOTE,
    payload: { id },
});