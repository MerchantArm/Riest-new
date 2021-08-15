const app = require('express')()
const path = require('path')
const fs = require('fs')

const mimeTypes = {
    'html' : 'text/html',
    'css' : 'text/css',
    'js' : 'text/javascript',
    'json' : 'application/json'
}

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get(/./,(req,res)=>{
    let type = mimeTypes[req.url.split('.')[1]]
    if(type){
        res.setHeader('Content-Type',type)
    }
    
    res.sendFile(path.join(__dirname,req.url))
})

app.listen(3000)