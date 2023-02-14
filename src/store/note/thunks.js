import { loadNotes } from "../../helpers/loadNotes";
import { setNotes } from "./noteSlice";

export const startLoadingNotes = () => {
    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { stateToDisplay: state } = getState().note;
        if (!uid) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes( uid, state );
        dispatch( setNotes( notes ) );
    }
}