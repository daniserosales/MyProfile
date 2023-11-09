
const Word = require ("../model/Words");
console.log('christmas')
class WordController {
    static async getAllWords(req, res) {
        try {
            console.log("are you")
            const words = await Word.getAll();
            console.log(words)
            res.status(200).json(words)
        } catch (error) {
            res.status(500).json({ "error": error.message })
        }
}

    static async getWordById(req, res) {
        try {
            const wordId = parseInt(req.params.wordId);
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

    static async search(req, res) {
        try {
            const word = req.body.word;
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
            const userId = parseInt(req.params.userId);
            const words = await Word.getWordByUserID(userId);
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

    static async updateWord(req, res) {
        const { id } = req.params;
        const { newWord } = req.body; // Use a different variable name
    
        try {
            const word = await Word.getOneByWordId(id);
            
            // Update the word property with the newWord value
            word.word = newWord;
    
            // Use the correct update method here
            const result = await word.update();
            res.status(202).json(result);
        } catch (error) {
            res.status(404).json({ error: "Word not found." });
        }
    }

   static async delete(req, res) {
        try {
            const word = await Word.getOneByWordId(req.params.id)
            const result = await word.destroy()
            res.status(204).json(result)
        } catch (error) {
            res.status(404).json({ "error": error.message })
        }
    }
}


module.exports = WordController
