"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tododb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config/config");
exports.tododb = mongoose_1.default.createConnection(config_1.config.mongo.url, { retryWrites: true, w: 'majority' });
// .then(()=>{
//     console.log("connected");
// }).catch((error)=> console.log(error));
