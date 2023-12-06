import { Routes, Route } from "react-router-dom";
import React from "react";
import { Homepage, Resume} from "./pages"


function App(){
    return(
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    )
}


export default App;
