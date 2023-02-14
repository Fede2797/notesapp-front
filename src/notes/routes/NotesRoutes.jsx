import { Navigate, Route, Routes } from "react-router-dom";

import { NotesPage, ArchivedPage, TrashPage } from "../pages";

export const NotesRoutes = () => {

  return (
    <Routes>
        <Route path="/" element={ <NotesPage /> } />
        <Route path="/archived" element={ <ArchivedPage /> } />
        <Route path="/trash" element={ <TrashPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
