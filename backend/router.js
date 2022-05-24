const express = require('express')
const { categoryIndex, categoryAll, categoryCreate, categoryUpdate, categorySoftDelete, categoryHardDelete } = require('./controller/CategoryController')
const router = express.Router()

router.get('/category', categoryIndex);
router.get('/all-category', categoryAll);
router.post('/category', categoryCreate);
router.put('/category/:id', categoryUpdate);
router.delete('/category/:id', categorySoftDelete);
router.delete('/del-category/:id', categoryHardDelete);