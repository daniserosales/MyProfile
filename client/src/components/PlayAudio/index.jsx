import React, { useEffect, useState } from "react";

function AudioPlayer() {

    const [audioData, setAudioDate] = useState(null);

    useEffect(() => {
        // Fetch audio content array from your API
        fetch('localhost')
          .then(response => response.json())
          .then(data => {
            // Extract the bytea data from the audio content array
            const byteaData = data.audio_content.data;
    
            // Convert bytea data to ArrayBuffer
            const arrayBuffer = new Uint8Array(byteaData).buffer;
    
            // Decode ArrayBuffer into audio
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.decodeAudioData(arrayBuffer, decodedData => {
              setAudioData(decodedData);
            });
          })
          .catch(error => {
            console.error('Error fetching audio data:', error);
          });
      }, []);
    return(
        <>
        </>
    )
}
