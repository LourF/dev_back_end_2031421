var arrayUtils = require('./ArrayUtils')
//3
function started () {
    console.log("Started Download");
}
function update (updateP) {
        console.log(updateP + "% of Download")
}
function completed (complet){
    console.log("Completed download")
}
function perfomedDownload(started_fn, update_fn, completed_fn){
    started_fn();
    for (let i = 0; 1 < 100; i++){
        update_fn(i);
    }
    completed_fn();
}


// perfomedDownload (started, update, completed);

var array = [7, 2, 3, 5, 8, 10, 11];
var value = 5;
var a1 =  [7, 2, 3, 5 ];
var a2 =  [7, 2, 3, 5];
var index1 = 1;
var index2 = 3;
console.log(arrayUtils.contains(array, value));