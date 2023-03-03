import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

import { CheckingAuth } from "../ui";
import { useCheckAuth } from "../hooks";
import { NotesRoutes } from "../notes/routes/NotesRoutes";
import { useDispatch, useSelector } from "react-redux";
import { setScreenWidth } from "../store/note";
import { useWindowWidth } from "@react-hook/window-size";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const status = useCheckAuth();

    const screenWidth = useWindowWidth();

    useEffect(() => {
        dispatch( setScreenWidth( screenWidth ) );
    }, [screenWidth])

    if ( status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <Routes>

            {
                (status === 'authenticated')
                    ? <Route path="/*" element={ <NotesRoutes /> } />
                    : <Route path="/auth/*" element={ <AuthRoutes /> } />
            }

            <Route path='/*' element={ <Navigate to='/auth/login' /> } />

        </Routes>
  )
}
