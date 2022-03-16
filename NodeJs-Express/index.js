const express = require('express')
const app = express()
const port = 1000

app.get('/',(req,res)=>{
    res.status(200).send('Recep Yavuz')
})

app.get('/index',(req,res)=>{
    res.status(200).send('Index')
})

app.get('/hakkimda',(req,res)=>{
    res.status(200).send('Hakkimda')
    
})

app.get('/iletisim',(req,res)=>{
    res.status(200).send('İletişim')
})

app.get('*',(req,res)=>{
    res.status(404).send('404 Not Found')
})

app.listen(port,()=>{
    console.log(`${port} portunda başlatıldı.`)
})