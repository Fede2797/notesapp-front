
export const loadNotes = async ( uid = '', state = '' ) => {
    if (!uid) throw new Error('You must provide the uid');
    if (!state) throw new Error('You must provide the state');

    const url = import.meta.env.VITE_BACK_URL + "?" + new URLSearchParams({ state, uid });
    const response = await fetch(url);

    const notes = await response.json();
    return notes;
}

export const loadNotesBySearch = async ( uid = '', state = '', searchText = '' ) => {
    if (!uid) throw new Error('You must provide the uid');
    if (!state) throw new Error('You must provide the state');

    const url = import.meta.env.VITE_BACK_URL 
                    + searchText 
                    + "?" 
                    + new URLSearchParams({ state, uid });
    const response = await fetch(url);

    const notes = await response.json();

    return notes;
}

export const updateNote = async ({ _id, title, description }) => {

    const url = import.meta.env.VITE_BACK_URL + _id;

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
    // return notes;
}

export const updateNoteState = async ({ _id, state }) => {
    const url = import.meta.env.VITE_BACK_URL + _id;

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
}

export const postNote = async ( note ) => {
    const url = import.meta.env.VITE_BACK_URL;

    console.log({note});
    const res = await fetch( url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(note)
    });

    const response = await res.json();
    return response;
}