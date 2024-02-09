const MP3 = require("../model/MP3");


class MP3Controller {
    static async getAllMP3(req, res) {
        try {
            const mp3 = await MP3.getAll();
            res.status(200).json(mp3)
        } catch (error) {
            res.status(404).json({error: "Unable to fetch mp3"})
        }
    }

    static async getByMP3Id(req, res) {
        const { id } = req.params;
        try {
            const mp3 = await MP3.getOneById(id);
            res.status(200).json(mp3);
        } catch (error) {
            res.status(404).json({error: "MP3 by ID not found."})
        }
    }

    static async getMP3ByName(req,res) {
        const { name } = req.body;

        try {
            const mp3 = await MP3.getAudioName(name);
            res.json(mp3);
        } catch (error) {
            console.log(error)
            res.status(404).json({ error: "User not found"})
        }
    }
}



module.exports = MP3Controller;


