const db = require("../database/connectmp3")
class MP3 {

    constructor ({audio_id,audio_name,audio_content}) {
        this.audio_id=audio_id;
        this.audio_name=audio_name
        this.audio_content=audio_content;
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
        const { audio_name, audio_content} = data;
        const response = await db.query('INSERT INTO audio_data(audio_data, audio_content) VALUES ($1, $2) RETURNING *;', [audio_name, audio_content ])
        const audioId = response.rows[0].audio_id;
        const newmp3 = await MP3.getOneById(audioId)
        return newmp3;
    }

    



}

module.exports = MP3;
