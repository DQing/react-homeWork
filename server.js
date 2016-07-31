var express = require('express');
var app = express();

app.use((req,res,next) => {
  console.log(req.method + ' -> ' + req.path);
  next();
});
app.use(express.static('html'));

app.get('/', function(req, res) {
  res.sendfile('./html/toDoList.html');
});

app.listen(3000);
