const express = require("express");
const router = express.Router();
const userViewModel = require("./UserViewModel")
const validation = require("../Middleware/Validation")
const user = require("./UserHandler")
router.route("/").post(userViewModel.userSignInViewModel, validation, user.postUsers);



module.exports = router;