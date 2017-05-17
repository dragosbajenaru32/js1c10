var express=require('express');
var router = express.Router();
var myDb = require('./../services/myDb');

router.get('/', function(req,res){
    myDb.getCollection('products',function(err,products){
        if(err){
            res.status(400).send(err);
        } else{
            res.status(200).send(products);
        }
    });
});

module.exports = router;