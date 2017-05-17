var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var HOST = 'localhost';
var PORT = 2017;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use('/',express.static(__dirname+'/public'));

var productsRoute = require('./routes/products');
app.use('/products', productsRoute);

var contactRoute = require('./routes/contact');
app.use('/contact', contactRoute);

app.listen(PORT,HOST,function(){
    console.log('Server started on http://'+HOST+':'+PORT);
});