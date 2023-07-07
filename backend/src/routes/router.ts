import express from 'express';
import { addItem, docCreate, docDelete, docRead, docTitleUpdate, itemDelete, itemRead, itemUpdate } from '../controller/crudcontroller';

const router = express.Router();
router.use(express.urlencoded({extended:true}))
router.use(express.json());

router.post('/',docCreate);

router.put('/',addItem);

router.get('/',docRead);

router.post('/read',itemRead);

router.delete('/',docDelete);

router.delete('/delete',itemDelete)

router.put('/update',itemUpdate)

router.put('/updateTitle',docTitleUpdate)

export default router;