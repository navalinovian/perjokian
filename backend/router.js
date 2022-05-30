const express = require('express')
const { categoryIndex, categoryAll, categoryCreate, categoryUpdate, categorySoftDelete, categoryHardDelete } = require('./controller/CategoryController');
const { productIndex, productAll, productCreate, productUpdate, productSoftDelete, productHardDelete } = require('./controller/ProductController');
const router = express.Router()

router.get('/category', categoryIndex);
router.get('/all-category', categoryAll);
router.post('/category', categoryCreate);
router.put('/category/:id', categoryUpdate);
router.delete('/category/:id', categorySoftDelete);
router.delete('/del-category/:id', categoryHardDelete);

router.get('/product', productIndex);
router.get('/all-product', productAll);
router.post('/product', productCreate);
router.put('/product/:uuid', productUpdate);
router.delete('/product/:uuid', productSoftDelete);
router.delete('/del-product/:uuid', productHardDelete);


module.exports = router