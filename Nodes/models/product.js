// const products = [];

const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),
'data',
'products.json');

const getProductFromFile = (cb) => {
   
    fs.readFile(p,(err,fileContent) => {
        if(err)
        {
            cb([]);
        }
        else
        {
            cb(JSON.parse(fileContent));
        } 
    });
};

module.exports = class Product {
    constructor(titleOfProduct)
    {
        this.title = titleOfProduct;
    }
    save()
    {
        // products.push(this);
        // const p = path.join(path.dirname(process.mainModule.filename),
        // 'data',
        // 'products.json');
        getProductFromFile(products =>
        {
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err) => 
            {
                console.log(err);
            });
        });
        // fs.readFile(p,(err,fileContent) =>
        // {   
        //     // let products = [];
        //     // if(!err){
        //     //     products = JSON.parse(fileContent);
        //     // }
        //     products.push(this);
        //     fs.writeFile(p,JSON.stringify(products),(err) => 
        //     {
        //         console.log(err);
        //     });
           
        // });
    }
    static fetchAll(cb)
    {
        getProductFromFile(cb);
    }
}