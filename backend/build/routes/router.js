"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crudcontroller_1 = require("../controller/crudcontroller");
const router = express_1.default.Router();
router.use(express_1.default.urlencoded({ extended: true }));
router.use(express_1.default.json());
router.post('/', crudcontroller_1.docCreate);
router.put('/', crudcontroller_1.addItem);
router.get('/', crudcontroller_1.docRead);
router.post('/read', crudcontroller_1.itemRead);
router.delete('/', crudcontroller_1.docDelete);
router.delete('/delete', crudcontroller_1.itemDelete);
router.put('/update', crudcontroller_1.itemUpdate);
router.put('/updateTitle', crudcontroller_1.docTitleUpdate);
exports.default = router;
