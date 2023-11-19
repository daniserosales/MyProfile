import { Routes, Route } from "react-router-dom";
import React from "react";
import { Homepage} from "./pages"


function App(){
    return(
        <Routes>
            <Route index element={<Homepage />} />
        </Routes>
    )
}


export default App;
