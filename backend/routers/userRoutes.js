const express = require("express");
const UserController = require("../../backend/controllers/users");
const Authorization = require ("../middleware/authenticator")
const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.get("/email", UserController.getUserByEmail);
router.get("/checkEmailToken", UserController.checkEmailToken);
router.put("/:id", UserController.updateUser);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);
router.delete("/:id", UserController.destroy);
// router.get("/get/:token", UserController.getUserByToken);
router.post("/register", UserController.register);


module.exports = router;
