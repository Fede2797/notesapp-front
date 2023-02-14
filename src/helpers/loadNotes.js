
export const loadNotes = async ( uid = '', state = '' ) => {
    if (!uid) throw new Error('You must provide the uid');
    if (!state) throw new Error('You must provide the state');

    const url = "http://localhost:3000/api/notes/" + "?" + new URLSearchParams({ state, uid });
    const response = await fetch(url);

    const notes = await response.json();
    console.log(notes);
    return notes;
}