const express = require("express");
const UserController = require("../../backend/controllers/users");
const router = express.Router();

router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.get("/email", UserController.getUserByEmail);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.destroy);
// router.get("/get/:token", UserController.getUserByToken);
router.post("/register", UserController.register);


module.exports = router;
