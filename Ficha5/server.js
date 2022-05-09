
const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var fs = require('fs');
const { response } = require('express');

   function readFile(fileName){
       var file = fs.readFileSync(fileName, 'utf-8');
     return file;
}

app.get('/', (req, res) => {
  res.send('hello ')
})

app.get('/users', (req, res) => {
  res.send(fileObj)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/users', (req, res) => {
  var person = req.body;
  //obter tamanho de um objeto json
  var size = Object.keys(fileObj).length;
  size++;
  person.id = size;
  fileObj["person"+person.id] = person;

  res.send(person.id + "");
})


app.delete('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = fileObj["person" + id];

  if (person != undefined){
    delete fileObj["person" + id];
    res.send("Id: " + id + "was deleted")
  }
  else{
    res.send("Id does not exis");
  }
})

app.get('/users/:id', (req, res) => {
  var id = req.params.id;
  var person = fileObj["person" + id];

  if (person != undefined){
    res.send(person);
  }
  else{
    res.send("Id does not exist");
  }
})

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  var personBody = req.body;
  var person = fileObj['person' + id];

  if (person != undefined){
    personBody.id = id;
    fileObj['person' + id] = personBody;
    res.send(personBody);
  }
  else {
    res.send("this id does not exist")
  }

  res.send('this is the id ' + body.id)
})



var fileStr = readFile('./persons.json');
var fileObj = JSON.parse(fileStr);
