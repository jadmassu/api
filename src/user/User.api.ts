import { User } from "./User.model";
import { userSignInViewModel } from "./User.viewModel";
import { UserHandler } from "./User.handler";
import validationErrorsMiddleware from "../Middleware/Validation";

const userHandler = new UserHandler();

const express = require("express");
export const router = express.Router();

// router.route("/").post(userSignInViewModel, validationErrorsMiddleware, postUsers);
router.route("/").post(userSignInViewModel, validationErrorsMiddleware, userHandler.post.bind(userHandler));

router.route("/").get(userHandler.getAll.bind(userHandler));




module.exports = router;