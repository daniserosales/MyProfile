const db = require('../database/connect')

class Words {

    constructor ({word_id, word, user_id, token_id}) {
        this.id = word_id;
        this.word = word;
        this.user_id = user_id;
        this.token_id = token_id;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM words")
        if (response.rows.length === 0) {
            throw new Error("Words not found.")
            }
    }

    static async getOneByUserId(id) {
        const response = await db.query("SELECT * FROM words WHERE user_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.")
        } 
        return new User(response.rows[0]);
    }

    static async getOneByWordId(id) {
        const response = await db.query("SELECT * FROM words WHERE word_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate word.")
        } 
        return new User(response.rows[0]);
    }

    static async getOneByWord(word) {
        const response = await db.query("SELECT * FROM words WHERE word = $1", [word]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate word.")
        } 
        return new User(response.rows[0]);
    }

    static async getOneByEmail(email) {
        const response = await db.query("SELECT * FROM words WHERE email = $1", [email]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate email.")
        }
    }
    static async create(data) {
        const { words: words } =  data; 
        const query =   "INSERT INTO words (words) " + 
        "VALUES ($1) RETURNING word_id";
        const values = [words];
        const response = await db.query(query, values);
        const newId =   response.rows[0].user_id;
        return Words.getOneByWordId(newId);
    }

    async update(data) {
        const { word } = data;
        const response = await db.query("UPDATE words SET word = $1 RETURNING *;", [word, this.id]);
        const wordId = response.rows[0].word_id
        const newWord = await Words.getOneByWordId(wordId)
        return newWord;

       }

    async destroy() {
        const response = await db.query(" DELETE FROM words WHERE word_id = $1;",[this.id]);
        if(response.rows.length != 1) {
            throw new Error("Unable to delete word.")
        }
        return new Words(response.rows[0]);
    }
}


module.exports = Words;
