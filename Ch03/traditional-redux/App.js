
// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NoteList from './components/NoteList';

const App = () => {
    const handleAddNote = () => {
        store.dispatch(addNote('New Note Title', 'New Note Content'));
    };

    return (
        <Provider store={store}>
            <div>
                <h1>My Notes App</h1>
                <NoteList />
                <button onClick={handleAddNote}>Add Note</button>
            </div>
        </Provider>
    );
};

export default App;