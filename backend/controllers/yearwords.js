const fullWordList = require("../words.json");
let words = [fullWordList]

class Random {
    static shuffleArray(array) {
        // Fisher-Yates shuffle algorithm
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    static async getRandom(req, res) {
        // Extract the label parameter from the request
        const { label } = req.params;

        // Check if the label exists in the fullWordList
        if (!fullWordList.hasOwnProperty(label)) {
            return res.status(404).json({ error: "No words found for the specified label." });
        }

        // Get the list of words for the specified label
        const wordList = fullWordList[label];

        // Shuffle the array of words
        const shuffledWordList = Random.shuffleArray([...wordList]);

        // Send the shuffled list of words as the response
        res.status(200).json(shuffledWordList);
    }
}



module.exports = Random;

