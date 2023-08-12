const{MongoClient}=require('mongodb') //importing mongodb

const url="mongodb://127.0.0.1:27017"

const mongoClient=new MongoClient(url)
try{
    mongoClient.connect()
    console.log("You are connect with db");
}
catch(err){
console.log(err);
}

const database=mongoClient.db("Human_resource")   /*name of the database*/
module.exports={database}