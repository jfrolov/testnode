

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

var port = Number(process.env.PORT || 3000)



//config app
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));



//use middleweare

app.use(express.static(path.join(__dirname , 'bower_components')));

app.use(bodyParser());




//define routes
app.use(require('./todo'));





//Create server

app.listen(port , function(){
	console.log('ready on port 8080');
})





