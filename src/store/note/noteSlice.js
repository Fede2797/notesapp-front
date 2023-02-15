import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        notes: [],
        stateToDisplay: 'ACTIVE',
        notesInitialState: [],
        updateNeeded: false,
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
        setNotesInitialState: ( state, action ) => {
            state.notesInitialState = action.payload;
        },
        removeNote: ( state, action ) => {
            const { index } = action.payload;
            state.notes.splice( index, 1 );
        }
    }
});


export const { 
    setNotes,
    setNote,
    setNotesInitialState,
    setStateToDisplay,
    removeNote,
} = noteSlice.actions;