const db = require('../database/connect')

class User {

    constructor ({user_id, first_name, last_name,  email,  password, school }) {
        this.id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.school = school;
    }


    static async getAll() {
        const response = await db.query("SELECT * FROM users")
        if (response.rows.length === 0) {
            throw new Error("Users not found.")
        }
        return response.rows.map(u => new User(u));
    }

    static async getOneByUserId(id) {
        const response = await db.query("SELECT * FROM users WHERE user_id = $1;", [id]); 
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.")
        }
        return new User(response.rows[0]);
    }

    static async getOneByEmail(email) {
        const response = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate email.");
        }
        return new User(response.rows[0]);
    }

    static async create(data) {
        const { first_name, last_name, email, password, school } = data;
        const response = await db.query('INSERT INTO users (first_name, last_name, email, password, school ) VALUES ($1, $2, $3, $4, $5 ) RETURNING *;', [first_name, last_name,  email, password, school ])
        const userid = response.rows[0].user_id;
        const newUser = await User.getOneByUserId(userid)
        return newUser
    }

    async update(data) {
        const {  first_name, last_name, email,password, school} = data;
        const response = await db.query("UPDATE users SET first_name = $1, last_name  = $2, email  = $3, password = $4, school = $5 RETURNING *;", [ first_name, last_name, email, password, school, this.id]);
        const userId = response.rows[0].user_id
        const newUser = await User.getOneByUserId(userId)
        return newUser
    }

    async destroy() {
        const response = await db.query ('DELETE FROM users WHERE user_id = $1 RETURNING *;', [this.id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to delete user.")
        }
        return new User(response.rows[0]);
    }

}


module.exports = User;
