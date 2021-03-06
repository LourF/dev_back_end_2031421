const Sequelize = require('sequelize');
const PersonModel = require ('./models/person')
const InvoiceModel = require ('./models/invoice')


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

const Person = PersonModel(sequelize,Sequelize);
const Invoice = InvoiceModel(sequelize,Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables created');
    }).then(function () {
        return Person.findAll();
    }).then(function (Persons) {
        console.log(Persons);
    });

module.exports = {
    Person,
    Invoice
}
