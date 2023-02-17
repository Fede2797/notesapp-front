import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoadingNotes, setStateToDisplay, startLoadingNotes } from "../store/note";

export const useSetNotesPage = ( state ) => {
    const { stateToDisplay } = useSelector( state => state.note );
    const dispatch = useDispatch();

    useEffect( () => { 
        dispatch( setStateToDisplay( state ));
        dispatch( startLoadingNotes() );
        dispatch( setIsLoadingNotes( true ) );
    }, [ stateToDisplay ] );
}