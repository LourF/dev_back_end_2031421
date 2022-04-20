module.exports = {
    events:{
        LOGIN: function(){
            console.log("Someone has logged in.")
        },
        LOGOUT: function(){
            console.log("Someone has logged out.")
        },
        NovoEvento: function(){
            console.log("Um novo evento foi criado.")
        },
    }
}