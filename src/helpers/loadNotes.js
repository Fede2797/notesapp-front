
export const loadNotes = async ( uid = '', state = '' ) => {
    if (!uid) throw new Error('You must provide the uid');
    if (!state) throw new Error('You must provide the state');

    const url = "http://localhost:3000/api/notes/" + "?" + new URLSearchParams({ state, uid });
    const response = await fetch(url);

    const notes = await response.json();
    return notes;
}

export const updateNote = async ({ _id, title, description }) => {
    const url = "http://localhost:3000/api/notes/" + _id;

    const date = new Date();
    const data = {
        title, description, dateModify: date
    };

    const res = await fetch( url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    });

    const response = await res.json();
    console.log(response);
    // return notes;
}

export const updateNoteState = async ({ _id, state }) => {
    const url = "http://localhost:3000/api/notes/" + _id;

    const date = new Date();
    const data = {
        state, dateModify: date
    };

    const res = await fetch( url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    });

    const response = await res.json();
    console.log(response);
}