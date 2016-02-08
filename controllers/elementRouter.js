var express = require('express');
var elementRouter = express.Router();
var periodicTable = require('./../models/periodicTable');
var bodyParser = require('body-parser');

elementRouter.use(bodyParser.urlencoded({ extended: false}));


//INDEX
elementRouter.get('/', function(req,res){
  res.render('elements/index', {periodicTable: periodicTable});
});

//NEW
elementRouter.get('/new', function(req, res) { 
  res.render("elements/new");
});

//CREATE
elementRouter.post('/', function(req, res) {
  var newElement = {};
  newElement.name = req.body.name;
  newElement.symbol = req.body.symbol;
  newElement.number = parseInt(req.body.number);
  periodicTable.elements.push(newElement);
  res.redirect('/');
});

// SHOW
elementRouter.get('/:id', function(req, res){  
  res.render('elements/:id', {element: periodicTable.elements[req.params.id-1]});
});

// EDIT
elementRouter.get('/:id/edit', function(req, res) {  
  res.render("elements/edit" + periodicTable.elements[req.params.id-1].name);
});

// UPDATE
elementRouter.post('/:id', function(req, res) {
  res.send("UPDATE element route " + periodicTable.elements[req.params.id-1].name);
});

// DELETE
elementRouter.post('/:id', function(req, res) {
  res.send("DELETE element " + periodicTable.elements[req.params.id-1].name);
});


module.exports = elementRouter;