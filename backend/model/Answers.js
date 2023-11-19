const db = require("../database/connect")

class Answers {

    constructor ({answer_id, answer, room_id, user_id}) {
        this.id=answer_id;
        this.answer=answer;
        this.room_id = room_id;
        this.user_id = user_id;
    }

    static async getAll(){
        const response = await db.query("SELECT * FROM answers ")
        if (response.rows.length === 0 ) {
            throw new Error ("Answers not found.")
        } 
        return response.rows.map( u => new Answers(u));
    }

    static async getAnswersByRoomID() {
        const response = await db.query("SELECT U.user_id, U.first_name, U.last_name, A.answer, A.room_id FROM users AS U INNER JOIN answers AS A ON U.user_id=A.user_id ;", [room_id]);
        if (response.rows.length === 0) {
            throw new Error ("There are no answers submitted in this room.")
        }
        return new Answers(response.rows[0]);
    }
}

module.exports = Answers;
