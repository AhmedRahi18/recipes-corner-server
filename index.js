const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const chefsData = require('./chefsData.json')
// server port
app.listen(5000,() => {
    console.log('Server is running on port 5000')
})
// chefsData
app.get('/chefsData',(req,res)=>{
    res.send(chefsData)
})
// chefsData with id
app.get('/chefsData/:id',(req,res)=>{
    const id = req.params.id
    const selectedChefsData = chefsData.find(c=>c.id === id)
    res.send(selectedChefsData)
})

app.get('/',(req,res) => {
    res.send('Server is running')
})