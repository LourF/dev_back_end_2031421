const { request } = require('express');
const express = require('express');
const { Sequelize, Model, DataTypes } = require('sequelize');
const { readEndpointFile } = require('swagger-autogen/src/handle-files');
const swaggerUi = require('swagger-ui-express');

// instanciar o express
const app = express();
// definir a porta do servidor http
const port = 3000;

// funções middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log('Example app listening at http://localhost:', port);
});



const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established");
    })
    .catch(err => {
        console.error("Unable to connect", err);
    });

const Person = sequelize.define('persons', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    profession: DataTypes.TEXT,
    age: DataTypes.INTEGER
})
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created');
    }).then(function () {
        return Person.findAll();
    }).then(function (Persons) {
        console.log(Persons);
    })

// person.bulkCreate([
//     { firstName: 'João', lastName: 'Jardim', profession: 'IT', age:57 },
//     { firstName: 'Diogo', lastName: 'Jesus', profession: 'TI', age:47 },
//     { firstName: 'Lourenço', lastName: 'Capelo', profession: 'PT', age:18 },
// ]).then(function (){
//     return person.findAll();
// }).then(function (person){
//     console.log(persons);
// });



app.get('/person', (req, res) => {
    // /person?id=1
    var id = req.query.id;
    if (id == undefined) {
        Person.findAll()
            .then(persons => {
                res.send(persons)
            });
    }
    else {
        Person.findByPk(id).then(person => {
            if (person == 0) {
                res.status(404).send("Cannot find id");
            }
            else {
                res.send(person)
            }

        })
    }
})


app.post('/person', (req, res) => {
    Person.create(req.body)
        .then(person => {
            res.send("Foi adicionado o id: " + person.id)
        })

})

app.delete('/person', (req, res) => {
    var id = req.body.id
    if (isNaN(id)) {
        res.status(400).send("Invalid id supplied");
    } else {

        Person.destroy(
            {
                where: {
                    id: id
                }
            })
            .then(result => {
                if (result == 0) {
                    res.status(404).send("Cannot find id");
                }
                else {
                    res.send("Number of deleted instances: " + result);
                }
            })

    }
})

app.delete('/person/:id', (req, res) => {
    var id = req.params.id
    if (isNaN(id)) {
        res.status(400).send("Invalid id supplied");
    } else {

        Person.destroy(
            {
                where: {
                    id: id
                }
            })
            .then(result => {
                if (result == 0) {
                    res.status(404).send("Cannot find id");
                }
                else {
                    res.send("Number of deleted instances: " + result);
                }
            })

    }
})

app.get('/person/id', (req, res) => {
    var id = req.query.id
    if (isNaN(id)) {
        res.status(400).send("Invalid id supplied");
    } else {
        Person.findByPk(id)
                .then(result => {
                    if (result == 0) {
                        res.status(404).send("Cannot find id");
                    }
                    else {
                        res.send(result)
                    }
                }
        )
    }
})

app.get('/person/:age/:profession', (req, res) => {
    Person.findAll({
        where: { 
            profession: req.params.profession,
            age: req.params.age
           
            
        }
    })
    .then(result => {
        if (result == 0){
            res.send("Cannot find id with profession");
        }
        else{
            res.send(result);
        }
    })
})

app.put('/person/:id', (req, res) => {
    Person.update(req.body, {
        where: { 
            id: req.params.id 
        }
    })
    .then(result => {
        if (result == 0){
            res.send("Cannot find id with profession");
        }
        else{
            Person.findAll({
                where: {
                    id: req.params.id
                }
            })
            .then(result =>{
                res.send(result);
            })
            
        }
    })
})
