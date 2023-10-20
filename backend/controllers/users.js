const bcrypt = require("bcrypt");
require("dotenv").config();
const User = require("../models/Users");
const Token = require("../models/Token");
const Verification = require("../models/Verification");

class UserController {
    static async getAllUsers(req, res) {
        try {
            const users = await User.getAll();
            res.status(200).json(users)
        } catch (error) {
            res.status(404).json({error: "Unable to fetch users"})
        }
    }

    static async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await User.getById(id);
            res.status(200).jsdon(user);
        } catch (error) {
            res.status(404).json({error: "User not found."})
        }
    }
    static async getUserByEmail(req,res) {
        const { email } = req.body;

        try {
            const user = await User.getByEmail(email);
        } catch (error) {
            console.log(error)
            res.status(404).json({ error: "User not found"})
        }
    }
    static async getUserByToken(req,res) {
        const { token } = req.body;
     try {
        const user = await User.getOneByToken(token)
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
        res.status(404).json({error: "Token not found."})
      }
    }
    static async updateUser(req, res) {
        const { id } = req.params;
        const { firstName, lastName, email, password, school } = req.body;
    
        try {
          const user = await User.getById(id);
          user.firstName = firstName || user.firstName;
          user.lastName = lastName || user.lastName;
          user.password = password || user.password;
          user.email = email || user.email;
          user.school = school || user.school;
          
          await user.update();
          res.status(202).json(user);
        } catch (error) {
          res.status(404).json({ error: "User not found." });
        }
    }
    
  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const user = await User.getById(id);
      await user.delete();
      res.status(204).json({ message: "User deleted successfully." });
    } catch (error) {
      res.status(404).json({ error: "User not found." });
    }
  }
  static async register(req, res) {
    const rounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);
    try {
      const data = req.body;

      if (await User.checkUsernameExists(data.username)) {
        return res.status(400).json({ error: 'Username already registered.' });
      }

      if (await User.checkEmailExists(data.email)) {
        return res.status(400).json({ error: 'Email already registered.' });
      }
      
      const salt = await bcrypt.genSalt(rounds);
      data.password = await bcrypt.hash(data.password, salt);
      const result = await User.create(data);
      const verificationToken = (await Verification.create(result.id)).token;
      const url = `http://localhost:3000/user/checkEmailToken/?token=${verificationToken}`;
      const sgApiKey = process.env.SENDGRID_API_KEY;
      sgMail.setApiKey(sgApiKey);

      await sgMail.send({
        to: result.email,
        from: `Audify.me <${process.env.SENDER_EMAIL}>`,
        subject: "Verify your email",
        html: `<div style="width: 70%; margin: 0 auto; ">
          <h3>Thanks for signing up! We're excited to have you as an early user. Just verify your email and start browsing my projects!</h3>
          <a style="margin-top:1em; padding: 1em; background-color: #33b249; text-decoration: none ; color: white" href="${url}"> <b>Verify Your Email Address</b></a></div>`,
      });
      console.log("run");
      res.status(201).send(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
