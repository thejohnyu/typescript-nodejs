"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
exports.app = express();
exports.app.use(express.json());
exports.app.get("/", function (req, res) {
    res.end("Hello From NodeJS");
});
