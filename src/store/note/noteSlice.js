import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: 'note',
    initialState: {
        notes: [],
        stateToDisplay: 'ACTIVE',
    },
    reducers: {
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        setStateToDisplay: ( state, action ) => {
            state.stateToDisplay = action.payload;
        }
    }
});


export const { 
    setNotes,
    setStateToDisplay
} = noteSlice.actions;