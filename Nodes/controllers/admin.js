const Product = require('../models/product');
exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product',{
        title:'Add Product',
        path:'/add-product'
    });  
};

exports.postAddProduct = (req,res,next) => {
    // products.push({title:req.body.title});
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title,imageUrl,price,description);
    product.save();
    res.redirect('/');   
};

exports.getProducts = (req,res,next) => {
    Product.fetchAll((products) =>
    { 
        res.render('admin/products',{
            prods:products,
            title:'Admin Products',
            path:'/admin/products'
        });
    });  
};