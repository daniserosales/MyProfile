const Token = require("../model/Token");

class TokenController {
  static async getAllToken(req, res) {
    try {
      const users = await Token.getAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(404).json({ error: "Unable to fetch all tokens." });
    }
  }

  static async getTokenById(req, res) {
    const { id } = req.params;
    try {
      const user = await Token.getOneById(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(404).json({ error: "Token not found." });
    }
  }

  static async getOneByToken(req, res) {
    try {
        const token = req.params.token; // Access the token from the URL parameter
        console.log('Token:', token);
        const tokenObj = await Token.getOneByToken(token);
        res.status(200).json(tokenObj);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(404).json({ error: "Get by token not found." });
         }
    }

}

module.exports = TokenController;
