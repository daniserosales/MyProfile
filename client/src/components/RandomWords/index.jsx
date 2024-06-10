import React, {useState} from 'react';
import './index.css'


async function RandomWords(level) {

    switch (level) {
        case "begin":
          response = await fetch("http://localhost:3000/random/easy");
          break;
        case "inter":
          response = await fetch("http://localhost:3000/random/inter");
          break;
        case "hard":
          response = await fetch("http://localhost:3000/random/hard");
          break;
      }
    
    return(
        <>
        </>
    )
}

export default RandomWords;
