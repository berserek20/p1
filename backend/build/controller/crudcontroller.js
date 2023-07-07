"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRead = exports.docTitleUpdate = exports.itemDelete = exports.docDelete = exports.itemUpdate = exports.addItem = exports.docRead = exports.docCreate = void 0;
const todoSchema_1 = __importDefault(require("../databse/todoSchema"));
const mongodb_1 = require("mongodb");
const docCreate = async (req, res) => {
    try {
        const requestedTitle = req.body.title;
        console.log("docCreate", requestedTitle);
        const response = await todoSchema_1.default.insertMany({ title: requestedTitle });
        res.send(response);
    }
    catch (error) {
        console.log(error);
    }
};
exports.docCreate = docCreate;
const docRead = async (req, res) => {
    const response = (await todoSchema_1.default.find());
    console.log(response);
    res.send(response);
};
exports.docRead = docRead;
const addItem = async (req, res) => {
    // console.log('addItem',req.body);
    const requestedItem = req.body.item;
    const requestedId = new mongodb_1.ObjectId(req.body.Id);
    const requestedItemDescription = req.body.description;
    const response = (await todoSchema_1.default.updateOne({ _id: requestedId }, {
        $push: {
            task: { item: requestedItem, description: requestedItemDescription },
        },
    }));
    res.send(response);
};
exports.addItem = addItem;
const itemUpdate = async (req, res) => {
    console.log("docUpdate", req.body);
    const requestedItem = req.body.item;
    const requestedDocId = new mongodb_1.ObjectId(req.body.Id);
    const requestedItemDescription = req.body.description;
    const requestedItemId = new mongodb_1.ObjectId(req.body.itemId);
    const response = await todoSchema_1.default.updateOne({ _id: requestedDocId, task: { $elemMatch: { _id: requestedItemId } } }, { $set: { "task.$.item": requestedItem, "task.$.description": requestedItemDescription } });
    res.send(response);
};
exports.itemUpdate = itemUpdate;
const docDelete = async (req, res) => {
    console.log("docDelete", req.body);
    const requestedDocId = new mongodb_1.ObjectId(req.body.Id);
    const response = await todoSchema_1.default.findByIdAndRemove(requestedDocId);
    res.send(response);
};
exports.docDelete = docDelete;
const itemDelete = async (req, res) => {
    console.log("docDelete", req.body);
    const requestedDocId = new mongodb_1.ObjectId(req.body.Id);
    const itemId = new mongodb_1.ObjectId(req.body.itemId);
    // task:{$elemMatch:{_id:itemId}} 
    const response = await todoSchema_1.default.updateOne({ _id: requestedDocId }, { $pull: { task: { _id: itemId } } });
    res.send(response);
};
exports.itemDelete = itemDelete;
const docTitleUpdate = async (req, res) => {
    const requestedDocId = new mongodb_1.ObjectId(req.body.Id);
    const requestedTitle = req.body.title;
    const response = await todoSchema_1.default.updateOne({ _id: requestedDocId }, {
        $set: { title: requestedTitle }
    });
    res.send(response);
};
exports.docTitleUpdate = docTitleUpdate;
const itemRead = async (req, res) => {
    const requestedDocId = new mongodb_1.ObjectId(req.body.Id);
    const response = await todoSchema_1.default.findById({ _id: requestedDocId });
    console.log(response);
    res.send(response);
};
exports.itemRead = itemRead;
