var array = [];
var f= function(){
    console.log("Hello World 1, ");
}
var f2= function(){
    console.log("2, ");
}
var f3= function(){
    console.log("3, ");
}

array.push(f,f2,f3);
for(let i = 0; i<array.length; i++){
    array[i]();
}

