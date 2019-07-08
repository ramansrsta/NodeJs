const Product = require('../models/product');
exports.getAddProduct = (req,res,next) => {
    res.render('add-product',{
        title:'Add Product',
        path:'/add-product'
    });  
};

exports.postAddProduct = (req,res,next) => {
    // products.push({title:req.body.title});
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');   
};

exports.getProducts = (req,res,next) => {
    // console.log(adminData.products);
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    Product.fetchAll((products) =>
    {
        res.render('shop',{
            prods:products,
            title:'shop',
            path:'/sh'   //use destination insted of path while using pug destination:'/sh'
        });
    });
};