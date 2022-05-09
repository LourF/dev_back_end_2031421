const { response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


  var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'ficha7'
  });

  app.get('/users', function(req, res){
      connection.query('SELECT * FROM ficha7.persons', function(err, results, fields){
        res.send(results);
      })
  })