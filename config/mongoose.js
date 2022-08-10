const mongoose=require('mongoose');

async function connection(){
    try{
    await  mongoose.connect('mongodb://localhost:27017/sampleProject');
    console.log("db is connected successfulllly")
    }
    catch(error){
        console.log(error);

    }
}
const db= connection();
module.exports=db;
