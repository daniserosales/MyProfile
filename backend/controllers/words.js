const Word = require ("../model/Words");

class WordController {
    static async getAllWords(req, res) {
        try {
            const words = await Word.getAll();
            res.status(200).json(words)
        } catch (error) {
            res.status(500).json({ "error": error.message })
        }
}

    static async getWordById(req, res) {
        try {
            const wordId = req.params.wordId;
            const word = await Word.getOneByWordId(wordId);
            if (word) {
                res.status(200).json(word);
            } else {
                res.status(404).json({ error: "Word or ID not found." });
            }
        } catch (error) {
            res.status(500).json({ "error": error.message });
        }
    }

    static async getWordByWord(req, res) {
        try {
            const word = req.body;
            const words = await Word.getWordByWord(word);
            if (words) {
                res.status(200).json(words);
            } else {
                res.status(404).json({ error: "Word not found." });
            }
        } catch (error) {
            res.status(500).json({ "error": error.message });
        }
    }

    static async getWordByUserID(req, res) {
        try {
            const word = req.params.userId;
            const words = await Word.getWordByUserID(word);
            res.status(200).json(words)
        } catch(error) {
            res.status(404).json({error: "Word or user ID not found."})
        }
    }

    static async create(req, res) {
        try {
            const data = req.body;
            const word = await Word.create(data)
            res.status(200).json(word)
        } catch(error) {
            res.status(400).json({"error": error.message})
        }
    }



}

module.exports = WordController
