import { User } from "./User.model";
import { userSignInViewModel } from "./User.viewModel";
import { postUsers } from "./User.handler";
import validationErrorsMiddleware from "../Middleware/Validation";



const express = require("express");
export const router = express.Router();

router.route("/").post(userSignInViewModel, validationErrorsMiddleware, postUsers);



module.exports = router;