const Url = require('../models/url')


const validator = require('url-validation')
const short= require("shorthash")


const urlsCltr = { }

urlsCltr.list = (req, res) => {
    Url.find()
        .then((urls) => {
            res.json(urls)
        })
        .catch((err) => {
            res.json(err)
        })
}

urlsCltr.create = (req, res) => {
    const body = req.body
    const url = new Url(body)
    url.save()
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json(err)
        })
}

urlsCltr.show = (req, res) => {
    const id = req.params.id
    Url.findById(id)
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json(err)
        })
}

urlsCltr.update = (req, res) => {
    const id = req.params.id 
    const body = req.body 
    Url.findByIdAndUpdate(id, body, { new: true, runValidators: true})
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json(err)
        })
}

urlsCltr.delete = (req, res) => {
    const id = req.params.id 
    const body=req.body
    Url.findByIdAndDelete(id)
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json(err)
        })
}

urlsCltr.redirect=(req,res)=>{
    const hash=req.params.hash
    console.log(hash)
    URL.findOne({ hashedUrl:hash})
        .then((url)=>{
        
         console.log(url.originalUrl)
            res.redirect(url.originalUrl)
    
        })
        .catch((err)=>{
            res.json(err)
        })
}
module.exports = urlsCltr