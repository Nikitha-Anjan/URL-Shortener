const mongoose=require('mongoose')
 const configDb=()=>{
    mongoose.connect('mongodb://localhost:27017/short-url',{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("connected to db")
    })
    .catch((err)=>{
        console.log("error connecting db",err)
    })
}
module.exports=configDb