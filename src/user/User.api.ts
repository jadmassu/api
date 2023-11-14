import { User } from "./User.model";
import { userSignInViewModel } from "./User.viewModel";
import { getUsers, postUsers } from "./User.handler";
import validationErrorsMiddleware from "../Middleware/Validation";



const express = require("express");
export const router = express.Router();

// router.route("/").post(userSignInViewModel, validationErrorsMiddleware, postUsers);
router.route("/").post(postUsers);

router.route("/").get(getUsers);




module.exports = router;