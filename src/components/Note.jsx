import React from 'react';

function Note(props) {
    console.log('props: ', props);
    return (
        <div className="note">
            <h1>{props.noteContent.noteTitle}</h1>
            <p>{props.noteContent.noteBody}</p>
            <button>DELETE</button>
        </div>
    );
}

export default Note;
