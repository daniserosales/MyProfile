import { Routes, Route } from "react-router-dom";
import React from "react";
import { Homepage, SignInPage, SignUpPage} from "./pages"


function App(){
    return(
        <Routes>
            <Route index element={<Homepage />} />
            <Route path="/signin" element ={<SignInPage />} />
            <Route  path="/signup" element={<SignUpPage />} />
        </Routes>
    )
}
        

export default App;
