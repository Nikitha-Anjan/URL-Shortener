const mongoose=require('mongoose')
const validator=require('validator')
const short=require("shorthash")

const urlSchema=mongoose.Schema({
     title:{
         type:String,
         required:true
     },
     originalUrl:{
         type:String,
         required:true,
         validate:{
            validator:function(value){
                return validator.isURL(value)
            },
            message:function(){
                return " invalid url"
            }
        }
         
     },
     hashedUrl:{
          type:String,
        
     },
     createdAt:{
         type:Date,
         default:Date.now
     }

})
urlSchema.pre('save',function(next){
    const url=this
    url.hashedUrl=short.unique(url.originalUrl)
    next( )
})
module.exports=mongoose.model('URL',urlSchema)  