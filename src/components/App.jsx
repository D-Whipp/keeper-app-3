import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(inputNote) {
        setNotes((previousNotes) => {
            return [...previousNotes, inputNote];
        });
    }

    function deleteNote(id) {
        setNotes((previousNotes) => {
            return previousNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            <Note
                key={1000}
                title="Note title"
                content="Note content"
            />
            {notes.map((noteItem, index) => (
                <Note
                    key={index}
                    id={index}
                    title={noteItem.noteContent}
                    content={noteItem.noteContent}
                    onChecked={deleteNote}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;
