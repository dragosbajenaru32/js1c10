var fs = require('fs');

var DB_PATH = './database';

function readFromDb(collectionName,callback){
    var COLLECTION_PATH = DB_PATH + '/' + collectionName + '.json';
    fs.readFile(COLLECTION_PATH, function(error,data){
        if(error){
            callback(error);
        } else{
            var collection = JSON.parse(data.toString());
            callback(null,collection);
        }
    });
}

function saveIntoDb(collectionName, collection, callback){
    var COLLECTION_PATH = DB_PATH + '/' + collectionName + '.json';
    fs.writeFile(COLLECTION_PATH,JSON.stringify(collection),function(error){
        if(error){
            callback(error);
        }
        else{
            callback(null);
        }
    });
}

function _getCollection(collectionName,callback){
    readFromDb(collectionName,function(error,collection){
        if(error){
            callback(error);
        } else{
            callback(null,collection);
        }
    });
}

function _createContact(collectionName,contact,callback){
    readFromDb(collectionName,function(error,collection){
        if(error) {
            callback(error);
        }
        else {
            collection.push(contact);
            saveIntoDb(collectionName,collection,function(error){
                if(error){
                    callback(error);
                }
                else{
                    callback(null);
                }
            });
        }
    });
}

module.exports = {
    getCollection:_getCollection,
    createContact:_createContact
};