import validationErrorsMiddleware from "../../Middleware/Validation";
import { GroupHandler } from "./Group.handler";
import { groupValidation } from "./Group.viewModel";


const groupHandler = new GroupHandler();
const express = require("express");
export const router = express.Router();

router.route("/").post(groupValidation, validationErrorsMiddleware, groupHandler.post.bind(groupHandler));
router.route("/").get(groupHandler.getAll.bind(groupHandler));