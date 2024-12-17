// src/components/NotesComponent.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, deleteNote } from './actions';

const NotesComponent = () => {
    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    const [noteText, setNoteText] = useState('');

    const handleAddNote = () => {
        dispatch(addNote({ id: Math.random(), text: noteText }));
        setNoteText('');
    };

    const handleDeleteNote = id => {
        dispatch(deleteNote(id));
    };

    return (
        <div>
            <input
                type="text"
                value={noteText}
                onChange={e => setNoteText(e.target.value)}
            />
            <button onClick={handleAddNote}>Add Note</button>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        {note.text}
                        <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotesComponent;