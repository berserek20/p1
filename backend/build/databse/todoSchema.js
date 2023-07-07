"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const database_1 = require("./database");
const schema = new mongoose_1.Schema({
    title: String,
    task: [{
            item: String,
            description: String
        }]
});
const todo = database_1.tododb.model("list", schema);
exports.default = todo;
