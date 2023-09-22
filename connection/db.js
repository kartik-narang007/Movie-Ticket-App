const { get } = require('http');
const mongodb = require('mongodb');
const sampleMovies = require('./sampleMovies');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) =>{
        MongoClient.connect('mongodb+srv://kartik0007:narangk007@cluster0.j3yl4af.mongodb.net/?retryWrites=true&w=majority').then(client=>{
        _db = client.db();
        console.log('Connected Successfully');

        //Insert Sample Movies
        callback();

        }).catch(err=>{
        console.log('err in connecting database', err);
        throw err;
    });

}
    
const getDb = () =>{
    if(_db) {
        return _db;
    }
    throw 'No Databse Found!';
}



exports.mongoConnect = mongoConnect;
exports.getDb = getDb;