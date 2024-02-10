const MP3 = require("../model/MP3");


class MP3Controller {
    static async getAllMP3(req, res) {
        try {
            const mp3 = await MP3.getAll();
            if (!mp3 || mp3.length === 0) {
                return res.status(404).json({ error: "No MP3 files found." });
            }
            console.log(mp3, "checking mp3");
            res.status(200).json(mp3);
        } catch (error) {
            // Check if the error is due to connection refusal
            if (error.code === 'ECONNREFUSED') {
                console.error("Error while connecting to the database:", error);
                return res.status(500).json({ error: "Failed to connect to the database." });
            }
            
            // Handle other types of errors
            console.error("Error while fetching MP3 files:", error);
            res.status(500).json({ error: "Internal server error" });
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


