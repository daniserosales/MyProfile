const Answers = require("../model/Words")

class AnswerController {
    static async getAllAnswers(req, res) {
        try {
            const answers = await Answers.getAll();
            res.status(200).json(answers)
        } catch  (error) {
            res.status(500).json({"error": error.message})
        }
    }

    static async search(req, res) {
        try {
            const answers = await Answers.getAnswersByRoomId();
            res.status(200).json(answers)
        } catch (error) {
            res.status(500).json({"error": error.message})
        }
    }
}
    