const express = require('express');
const router = express.Router();
const { getProducts, addProduct, deleteProduct, expiredProducts } = require('../controllers/productController');

router.get('/all', getProducts);
router.post('/add', addProduct);
router.delete('/delete', deleteProduct);
router.get('/expired', expiredProducts);

module.exports = router;