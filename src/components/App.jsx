import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((previousNotes) => {
            return [...previousNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes((previousNotes) => {
            return previousNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    console.log('Notes: ', notes);

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                console.log('note item: ', noteItem);
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;

// **************** My Code ***********
// import React, { useState } from 'react';
// import Header from './Header';
// import Footer from './Footer';
// import Note from './Note';
// import CreateArea from './CreateArea';

// function App() {
//     const [notes, setNotes] = useState([]);

//     function addNote(inputNote) {
//         setNotes((previousNotes) => {
//             return [...previousNotes, inputNote];
//         });
//     }

//     function deleteNote(id) {
//         setNotes((previousNotes) => {
//             return previousNotes.filter((note, index) => {
//                 return index !== id;
//             });
//         });
//     }

//     return (
//         <div>
//             <Header />
//             <CreateArea onAdd={addNote} />
//             <Note
//                 key={1000}
//                 title="Note title"
//                 content="Note content"
//             />
//             {notes.map((noteItem, index) => (
//                 <Note
//                     key={index}
//                     id={index}
//                     title={noteItem.noteContent}
//                     content={noteItem.noteContent}
//                     onChecked={deleteNote}
//                 />
//             ))}
//             <Footer />
//         </div>
//     );
// }

// export default App;
