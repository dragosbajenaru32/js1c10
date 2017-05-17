var PRODUCTS_URL = 'http://localhost:2017/products';
var CONTACT_URL = 'http://localhost:2017/contact';

var dataService = {
    populateProducts:function(callback){
        var xhr=new XMLHttpRequest();
        xhr.open('GET',PRODUCTS_URL,true);
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    var products = JSON.parse(xhr.responseText);
                    callback(null,products);
                } else{
                    var error = JSON.parse(xhr.responseText);
                    callback(error);
                }
            }
        }
    },
    sortByPrice:function(callback){
        var xhr=new XMLHttpRequest();
        xhr.open('GET',PRODUCTS_URL,true);
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    var products = JSON.parse(xhr.responseText);
                    products.sort(function(prod1,prod2){
                        return prod1.price-prod2.price;
                    });
                    callback(null,products);
                } else{
                    var error = JSON.parse(xhr.responseText);
                    callback(error);
                }
            }
        }
    },
    search:function(callback){
        var xhr=new XMLHttpRequest();
        xhr.open('GET',PRODUCTS_URL,true);
        xhr.send();
        xhr.onreadystatechange=function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    var products = JSON.parse(xhr.responseText);
                    products = products.filter(function(prod){
                        var matches = prod.title.indexOf(document.getElementById('search').value)!==-1;
                        return matches;
                    });
                    callback(null,products);
                } else{
                    var error = JSON.parse(xhr.responseText);
                    callback(error);
                }
            }
        }
    },
    createContact:function (contact, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', CONTACT_URL, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send(JSON.stringify({ email: contact.email, title: contact.title, comment: contact.comment }));
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var _contact = JSON.parse(xhr.responseText);
                    callback(null, _contact);
                } else {
                    var error = JSON.parse(xhr.responseText);
                    callback(error);
                }
            }
        }
    }
};