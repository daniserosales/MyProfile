const db = require("../database/connectmp3")
class MP3 {

    constructor ({audio_id,audio_name,audio_content, topic,text}) {
        this.audio_id=audio_id;
        this.audio_name=audio_name
        this.audio_content=audio_content;
        this.topic = topic;
        this.text = text
    }

    static async getAll(){
        const response = await db.query("SELECT * FROM audio_data ")
        if (response.rows.length === 0 ) {
            throw new Error ("MP3 not found.")
        } 
        return response.rows.map( u => new MP3(u));
    }
    static async getOneById(id) {
        const response = await db.query("SELECT * FROM audio_data WHERE audio_id = $1;", [id]); 
        if (response.rows.length != 1) {
            throw new Error("Unable to locate mp3 ID.")
        }
        return new MP3(response.rows[0]);
    }
    static async getAudioName(audio_name){
        const response = await db.query("SELECT * FROM audio_data WHERE audio_name = $1 ", [audio_name])
        if (response.rows.length === 0 ) {
            throw new Error ("MP3 audio name not found.")
        } 
        return new MP3(response.rows[0]);;
    }

    
    static async create(data) {
       try { const { audio_name, audio_content, text, topic} = data;
        const response = await db.query('INSERT INTO audio_data(audio_name, audio_content, topic, text) VALUES ($1, $2, $3, $4) RETURNING *;', [audio_name, audio_content, topic, text ])
        console.log(response, "response in mp3 model")
        const audioId = response.rows[0].audio_id;
        const newmp3 = await MP3.getOneById(audioId)
        console.log(newmp3,"checking newmp3 model")
        return newmp3;} 
        catch (error) {
            console.error("An error occurred while creating MP3:", error);
            throw error;
        }
    }

}

module.exports = MP3;
