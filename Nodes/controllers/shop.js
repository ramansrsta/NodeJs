const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req,res,next) => {
    Product.fetchAll((products) =>
    {
        res.render('shop/product-list',{
            prods:products,
            title:'All Products',
            path:'/products'   //use destination insted of path while using pug destination:'/sh'
        });
    });
};

exports.getProduct= (req,res,next) => {
    const prodId = req.params.productId;
    Product.findById(prodId,product=>{
        res.render('shop/product-detail',
        {
            product:product,
            title:product.title,
            path:'/product-detail'
        });
    });
};

exports.getIndex = (req,res,next) => {
    Product.fetchAll((products) =>
    { 
        res.render('shop/index',{
            prods:products,
            title:'index',
            path:'/index'
        });
    });
};

exports.getCart = (req,res,next) => {
    res.render('shop/cart',{
        path:'/cart',
        title:'Your Cart'
    });
};

exports.postCart = (req,res,next) => {
    const prodId = req.body.productId;
    Product.findById(prodId,(product) => {
        Cart.addProduct(prodId,product.price);
    });
    res.redirect('/cart');
};

exports.getOrders = (req,res,next) => {
    res.render('shop/orders',{
        path:'/orders',
        title:'Your Orders'
    });
};

exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout',{
        path:'/checkout',
        title: 'Checkout'
    });
};