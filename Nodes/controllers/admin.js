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

exports.getEditProduct = (req,res,next) => {
    const editMode = req.query.edit;
    if(!editMode)
    {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId,product=>{
        if(!product)
        {
            return res.redirect('/');
        }
        res.render('admin/edit-product',{
            title:'Edit Product',
            path:'/edit-product',
            editing: editMode,
            product:product
        });
    });
};

exports.postEditProduct = (req,res,next) => {
   
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