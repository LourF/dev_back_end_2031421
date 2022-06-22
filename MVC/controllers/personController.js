const Person = require('../sequelize').Person;

exports.test = function(req, res, next){
    res.send("PERSONS TEST");
};

exports.getAllPerson = function (req, res, next) {
    Person.findAll()
    .then(results => {
        res.send(results)
    })
}

exports.createPerson = function(req, res, next){
        Person.create()
        .then(results => {
            res.send("Foi adicionado o id: " + results.id)
        })

}

exports.deletePerson = function (req, res, next){
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
}

exports.deletePerson = function (req, res, next){
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
}

exports.getPerson = function (req, res, next){
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
}

exports.getPersonAP = function (req, res, next) {
    Person.findAll({
        where: {
            profession: req.params.profession,
            age: req.params.age


        }
    })
        .then(result => {
            if (result == 0) {
                res.send("Cannot find id with profession");
            }
            else {
                res.send(result);
            }
        })
}

exports.putPerson = function (req, res, next) {
        var id = req.params.id;
        var name = req.body.firstName;
        var last = req.body.lastName;
        var professions = req.body.profession;
        var age = req.body.age;
        if (isNaN(id)){
            res.status(400).send("invalid id supplied")
        }
        else{
            Person.update({
                firstName: name, 
                lastName: last, 
                profession: professions,
                age: age,
            },
            {
                where: {id: id},
            }
            )
            .then(function (conta){
                if (conta == 0) {
                    res.send("cannot find id");
                }
                else{
                    Person
              .findAll({
                where: {
                  id: req.params.id,
                },
              })
              .then((result) => {
                res.send(result);
              });
          }
        });
    }};