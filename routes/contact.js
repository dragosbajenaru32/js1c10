var express = require('express');
var router = express.Router();
var myDb = require('./../services/myDb');

router.post('/', function(req, res) {
    var contact = req.body;
    myDb.createContact('contact',contact,function(err){
        if(err){
            res.status(400).send(err);
        }
        else{
            res.status(200).send('The contact has been created succcessfully.');
        }
    });
});

module.exports = router;