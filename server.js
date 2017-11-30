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
app.get('/new' , () =>{
  res.send({ salida: 'Hola Mundo!!!' })

})


app.listen(port);
