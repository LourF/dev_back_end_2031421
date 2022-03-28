var utils = {
    isEmpty: function(array){
        if (array.lenght==0){
        return true
    }
        else{
            return false
        }
    },
    max: function(array){
            var maxG = array[0];
            for (let i = 1; i < array.length; i++){
                if(array[i] > maxG){
                    maxG = array[i];
            }
        }
        return maxG
    },
    min: function(array){
        var minG = array[0];
            for (let i = 1; i < array.length; i++){
                if(array[i] < minG){
                    minG = array[i];
                }
            }
        return minG
    },
    average: function(array){
        var avg = 0;
    for (let i = 0; i < array.length; i++){
        avg += array[i];
        }
        return avg / array.length;
    },
    indexOf: function(array, value){
        
    },
    subArray: function(array, startIndex, endIndex){

    },
    isSameLength: function(a1, a2){

    },
    reverse: function(array){

    },
    swap: function(array, index1, index2){

    },
    contains: function(array, value){

    },
    concatenate: function(a1, a2){

    },
};
module.exports = utils