import { Routes, Route } from "react-router-dom";
import React from "react";
import { Homepage, Resume, NotFound,ProjectSpelling} from "./pages"


function App(){
    return(
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/spelling" element={<ProjectSpelling />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}


export default App;
