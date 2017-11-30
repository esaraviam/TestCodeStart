var port = process.env.PORT || 3000;
var express = require('express');

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


app.listen(port);
