module.exports = (sequelize, type) =>{
sequelize.define('persons', {
    firstName: type.TEXT,
    lastName: type.TEXT,
    profession: type.STRING,
    age: type.INTEGER
})
}