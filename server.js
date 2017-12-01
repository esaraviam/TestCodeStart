var port = process.env.PORT || 3000;
var express = require('express');
const moment = require('moment')

var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});
app.get('/new' , (req , res) =>{
  res.send({ salida: 'Hola Mundo!!!' })

})

app.get('/saludar' , (req , res )=>{
  res.send({message: 'Hola don nelson'})
})
app.get('/webpeck' , (req, res) =>{
  let fecha = moment().format()
  res.send({
    message: 'pequeño' + fecha
  })

})



app.listen(port);
