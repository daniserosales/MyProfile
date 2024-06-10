import './index.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function LoadWords() {
    const location = useLocation();
    const pagepath = location.pathname;

    async function fetchWords() {
        let words = [];

        try {
            // Example logic - replace with your own
            if (pagepath.includes('/year1')) {
                const response = await fetch(`https://localhost:3000/year/${selectedRule}`);
                const data = await response.json();
                words = data.word.toLowerCase();
            } else if (pagepath.includes('/year2')) {
                const response = await fetch(`https://localhost:3000/year/${selectedRule}`);
                const data = await response.json();
                words = data.word.toLowerCase();
            }
        } catch (error) {
            console.error('Error fetching words:', error);
        }

        return words;
    }

    const [words, setWords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedWords = await fetchWords();
            setWords(fetchedWords);
        };

        fetchData();
    }, [pagepath]);

    return (
        <div>
            <h1>Loaded Words</h1>
            <ul>
                {words.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul>
        </div>
    );
}

export default LoadWords;
