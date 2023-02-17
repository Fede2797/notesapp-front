import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        notes: [],
        stateToDisplay: 'ACTIVE',
        notesInitialState: [],
        updateNeeded: false,
        searchText: '',
        isLoadingNotes: false,
    },
    reducers: {
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        setStateToDisplay: ( state, action ) => {
            state.stateToDisplay = action.payload;
        },
        setNote: ( state, action ) => {
            const { index, value, property } = action.payload;
            state.notes[ index ][ property ] = value;
        },
        addNote: ( state, action ) => {
            state.notes.unshift( action.payload );
        },
        setNotesInitialState: ( state, action ) => {
            state.notesInitialState = action.payload;
        },
        removeNote: ( state, action ) => {
            const { index } = action.payload;
            state.notes.splice( index, 1 );
        },
        setSearchText: ( state, action ) => {
            state.searchText = action.payload;
        },
        setIsLoadingNotes: ( state, action ) => {
            state.isLoadingNotes = action.payload;
        },
    }
});


export const { 
    addNote,
    removeNote,
    setNote,
    setNotes,
    setNotesInitialState,
    setStateToDisplay,
    setSearchText,
    setIsLoadingNotes,
} = noteSlice.actions;