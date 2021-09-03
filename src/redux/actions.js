const addNote = text => ({
    type: 'ADD_NOTE',
    payload: {
        id: Date.now(),
        text,
    },
});

const deleteNote = id => ({
    type: 'DELETE_NOTE',
    payload: {
        id,
    },
});
