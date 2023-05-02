const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.listen(5000,() => {
    console.log('server is running on port 5000')
})

app.get('/',(req,res) => {
    res.send('Server is running')
})