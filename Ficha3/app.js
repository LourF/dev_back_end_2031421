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

var array = [6, 2, 3];
console.log(arrayUtils.average(array));