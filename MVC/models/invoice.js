module.exports = (sequelize, type) =>{
    return sequelize.define('invoice', {
        fullName: type.TEXT,
        date: type.TEXT,
        value: type.FLOAT
    })
    }