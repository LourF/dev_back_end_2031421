//2.A
var obj = {
name: "Lourenço", 
age: "19", 
gender:"M"};

// console.log(JSON.stringify(obj));

//2.B
var personParse = JSON.parse('{"name":"Lourenço","age":"19","gender":"M"}')
   
// console.log(personParse);


var Emitter = require("./emitter");
var app = new Emitter();
var eventConstants = require("./configs")

app.on(eventConstants.events.LOGIN,function(){
    console.log("Someone has logged in.")
});
app.on(eventConstants.events.LOGOUT,function(){
    console.log("Someone has logged out.")
});
app.on(eventConstants.events.NovoEvento, function(){
    console.log("Um novo evento foi criado.")
});

app.emit(eventConstants.events.LOGIN,);
app.emit(eventConstants.events.LOGOUT);
app.emit(eventConstants.events.NovoEvento);