const express = require('express')
const { categoryIndex, categoryAll, categoryCreate, categoryUpdate, categorySoftDelete, categoryHardDelete, categoryShow } = require('./controller/CategoryController');
const { invoiceIndex, paymentCreate, invoiceCreate, invoiceShow } = require('./controller/InvoiceController');
const { productIndex, productAll, productCreate, productUpdate, productSoftDelete, productHardDelete } = require('./controller/ProductController');
const { roleIndex, roleShow, roleCreate, roleUpdate, roleSoftDelete } = require('./controller/RoleController');
const { userIndex, userShow, userCreate, userUpdate, userSoftDelete, login } = require('./controller/UserController');
const router = express.Router()

router.get('/category', categoryIndex);
router.get('/category/:id', categoryShow);
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

router.get('/role', roleIndex)
router.get('/role/:id', roleShow)
router.post('/role',   roleCreate)
router.put('/role/:id', roleUpdate)
router.delete('/role/:id', roleSoftDelete)

router.get('/user', userIndex)
router.get('/user/:uuid', userShow)
router.post('/user', userCreate)
router.post('/login', login)
router.patch('/user/:uuid', userUpdate)
router.delete('/user/:uuid', userSoftDelete)

router.get('/invoice', invoiceIndex)
router.post('/invoice', invoiceCreate)
router.get('/invoice/:uuid', invoiceShow)

module.exports = router