const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const chefsData = require('./chefsData.json')

app.listen(5000,() => {
    console.log('server is running on port 5000')
})

app.get('/chefsData',(req,res)=>{
    res.send(chefsData)
})

app.get('/',(req,res) => {
    res.send('Server is running')
})