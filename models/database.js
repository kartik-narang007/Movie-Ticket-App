const getDb = require('../connection/db').getDb;

class Movie{
    constructor(name,description,duration,ratings){
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.ratings = ratings;
    }

    save(){
        const db = getDb();
        db.collection('movies').insertOne(this).then(result =>{
            console.log(result);
        }).catch(err=>{
            console.log(err);
        });
    }
}

module.exports = Movie;