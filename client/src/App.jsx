import { Routes, Route } from "react-router-dom";
import React from "react";
import { Homepage, Resume, NotFound} from "./pages"


function App(){
    return(
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}


export default App;
