// const http = require('http'); //require is needed for importing modules and files//after writing app.listen we need not to write this as well
// const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// const routes = require('./routes');
// const server = http.createServer(routes);
// console.log('I am loving it');
const app = express();
// app.set('view engine', 'pug');
app.set('view engine','ejs'); //importing ejs
// app.use((req,res,next) => {
//     console.log('in the middleware');
//     next();//allows request to move to next middle ware
// });

//Admin route
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminData.routes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).render('pagenotFound',{title:'Error 404'});
});


// const server = http.createServer(app);
// server.listen(3000);

//instead of other code we can use just
app.listen(3000);