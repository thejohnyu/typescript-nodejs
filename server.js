"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./src/app");
var port = process.env.PORT || 3000;
app_1.app.listen(port, function () {
    console.log("Running on port: ", port);
    console.log("--------------------------");
});
