var express = require('express');
var app = express();
var periodicTable = require('./models/periodicTable');
var elementRouter = require('./controllers/elementRouter')
var expressLayouts = require('express-ejs-layouts');

//application settings
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use('/elements', elementRouter);
app.use(express.static(__dirname + '/public'));



app.get('/',function(req, res){
  res.render('index', {welcome:"welcome to the index"});
});




app.listen('3000', function(){
  console.log("Running on port 3000");
});
