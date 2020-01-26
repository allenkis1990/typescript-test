/**
 * Created by Allen Liu on 2020/1/26.
 */
let express = require('express')
let app = express()
let path = require('path')
app.use(express.static('./'))

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,'./index.html'))
})

app.listen('8080')