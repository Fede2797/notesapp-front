import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        notes: [],
        stateToDisplay: 'ACTIVE',
        noteInitialState: {title: '', description: ''},
        updateNeeded: false,
        searchText: '',
        isLoadingNotes: false,
        isSidebarOpen: true,
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
        setNoteInitialState: ( state, action ) => {
            state.noteInitialState = action.payload;
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
        toggleIsSidebarOpen: ( state ) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    }
});


export const { 
    addNote,
    removeNote,
    setNote,
    setNotes,
    setNoteInitialState,
    setStateToDisplay,
    setSearchText,
    setIsLoadingNotes,
    toggleIsSidebarOpen,
} = noteSlice.actions;