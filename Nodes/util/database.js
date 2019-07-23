// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     database: 'nodejs',
//     password: ''
// });

// module.exports = pool.promise();

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('nodejs','root','',{
//     dialect:'mysql',
//     host: '127.0.0.1'
// });
// module.exports = sequelize;

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let _db; //underscore signifies it will be used internally in file

// const mongoConnect = (callback) => {
//     MongoClient.connect('mongodb+srv://raman:raman@cluster0-kttdp.mongodb.net/shop?retryWrites=true&w=majority')
//     .then(client => {
//         _db = client.db();
//         callback();
//     })
//     .catch(err => {
//         console.log(err);
//         throw err;
//     });
// }

// const getDb = () => {
//     if(_db)
//     {
//         return _db;
//     }
//     throw 'No database found';
// }

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;