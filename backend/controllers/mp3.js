const MP3 = require("../model/MP3");


class MP3Controller {
    static async getAllMP3(req, res) {
        try {
            const mp3 = await MP3.getAll();
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

    static async create(req,res) {
        try {
            const {data} = req.body;
            console.log(data, 'checking req.body')
            if (!data || !data.audio_name || !data.audio_content || !data.text) {
                throw new Error("Invalid data format or missing required properties.");
            }
            const mp3 = await MP3.create(data);
            console.log(mp3, "checking if it created a new mp3.")
            res.status(200).json(mp3);
        } catch(error) {
            res.status(400).json({"error": error.message})
           
        }
    }
}



module.exports = MP3Controller;


