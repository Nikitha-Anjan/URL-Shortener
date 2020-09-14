
const express =require('express')
const configDb=require('./config/database')
const router=require('./config/routes')
const  useragent = require('express-useragent');

const port=3075
const app=express()
configDb()
app.use(express.json())
app.use(router)
app.use(useragent.express());
app.get('/', function(req, res){
    res.send(req.useragent);
});

app.listen(port,()=>{

    console.log('server running on port', port)
})

