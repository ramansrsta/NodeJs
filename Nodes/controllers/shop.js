const Product = require('../models/product');

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