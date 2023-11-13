"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const User_viewModel_1 = require("./User.viewModel");
const User_handler_1 = require("./User.handler");
const Validation_1 = __importDefault(require("../Middleware/Validation"));
const express = require("express");
exports.router = express.Router();
exports.router.route("/").post(User_viewModel_1.userSignInViewModel, Validation_1.default, User_handler_1.postUsers);
module.exports = exports.router;
