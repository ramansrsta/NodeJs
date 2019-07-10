const path = require('path');
const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/',shopController.getIndex);
router.get('/product-list',shopController.getProducts);
router.get('/cart',shopController.getCart);
router.post('/cart',shopController.postCart);
router.get('/checkout',shopController.getCheckout); 
router.get('/orders',shopController.getOrders); 
router.get('/products/:productId',shopController.getProduct);



module.exports = router;