const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/home', function (req, res) {
    console.log(req.query);
    

    res.send('Sam')
  })
  



app.listen(3000,() =>{
    console.log('listening on port 3000');
})