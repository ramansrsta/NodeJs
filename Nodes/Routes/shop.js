const path = require('path');
const express = require('express');
const adminData = require('./admin');
const router = express.Router();

router.get('/',(req,res,next) => {
    // console.log(adminData.products);
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    const products = adminData.products;
    res.render('shop',{
        prods:products,
        title:'shop',
        path:'/sh'   //use destination insted of path while using pug destination:'/sh'
    });

});


module.exports = router;