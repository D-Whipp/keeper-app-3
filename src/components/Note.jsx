import React from 'react';

function Note(props) {
    console.log('props: ', props);
    return (
        <div className="note">
            <h1>{props.noteTitle}</h1>
            <p>{props.noteBody}</p>
            <button
                onClick={() => {
                    props.onChecked(props.id);
                }}
            >
                DELETE
            </button>
        </div>
    );
}

export default Note;
