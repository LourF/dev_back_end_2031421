
const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var fs = require('fs')

   function readFile(fileName){
       var file = fs.readFileSync(fileName, 'utf-8');
     return file;
}

app.get('/', (req, res) => {
  res.send('hello ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/users', (req, res) => {
  var person = req.body;

  var fileStr = readFile('./persons.json');
  var fileObj = JSON.parse(fileStr);
  //obter tamanho de um objeto json
  var size = Object.keys(fileObj).length;
  fileObj.person4 = person;
  person.id = ++size;

 
  res.send(JSON.stringify(fileObj));
})


app.delete('/users', (req, res) => {
  res.send('hello, delete ')
})

app.put('/users', (req, res) => {
  res.send('hello, put ')
})

app.get('/users', (req, res) => {
  var file = readFile('./persons.json');
  res.send(file)
})


