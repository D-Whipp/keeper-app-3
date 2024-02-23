import React, { useState } from 'react';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote((previousNote) => {
            return {
                ...previousNote,
                [name]: value,
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: '',
            content: '',
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;

// (((((((_)_(()__())))))))) My Code (((((((_)_(()__()))))))))
// import React, { useState } from 'react';

// function CreateArea(props) {
//     // const [inputTitle, setInputTitle] = useState('');
//     // const [inputContent, setInputContent] = useState('');

//     // function handleTitle(event) {
//     //     const newValue = event.target.value;
//     //     setInputTitle(newValue);
//     // }

//     // function handleContent(event) {
//     //     const newValue = event.target.value;
//     //     setInputContent(newValue);
//     // }
//     const [noteContent, setNoteContent] = useState({
//         noteTitle: '',
//         noteBody: '',
//     });

//     function handleChange(event) {
//         // event.preventDefault();
//         const { name, value } = event.target;

//         setNoteContent((previousValue) => {
//             return {
//                 ...previousValue,
//                 [name]: value,
//             };
//         });
//     }

//     return (
//         <div>
//             <form>
//                 <input
//                     // onChange={handleTitle}
//                     onChange={handleChange}
//                     name="title"
//                     type="text"
//                     // value={inputTitle}
//                     value={noteContent.noteTitle}
//                     placeholder="Title"
//                 />
//                 <textarea
//                     // onChange={handleContent}
//                     onChange={handleChange}
//                     name="content"
//                     type="text"
//                     // value={inputContent}
//                     value={noteContent.noteBody}
//                     placeholder="Take a note..."
//                     rows="3"
//                 />
//                 <button
//                     onClick={() => {
//                         props.onAdd(noteContent);
//                         setNoteContent('');
//                     }}
//                 >
//                     Add
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default CreateArea;
