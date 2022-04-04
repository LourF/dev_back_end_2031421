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
        var posi = 0;
        for (let i= 0; i < array.length; i++){
            if (array[i]==value){
                posi=array[i];
                return i;
            }
        }
        return -1
    },
    subArray: function(array, startIndex, endIndex){
        var array1 = [];
        for (let i = startIndex; i <= endIndex; i++) {
            array1.push(array[i]);
        }   
        return array1;
    },
    isSameLength: function(a1, a2){
       return a1.length == a2.length;
        
    //    if(a1.length == a2.length){
    //     return true;
    // }
    // return false;
    },
    reverse: function(array){
        var r = []
        // for (let i = 0; i < array.length; i++) {
        //     r.unshift(array[i]);
        // }
        for (let i = array.length - 1; i >= 0; i--) {
            r.push(array[i]);
        }
        return r
    },
    swap: function(array, index1, index2){
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux; 
        return array;
    },
    contains: function(array, value){
            // var posi = 0;
            // for (let i= 0; i < array.length; i++){
            //     if (array[i]==value){
            //         posi=array[i];
            //         return true;
            //     }
            // }
            // return false
        var index = this.indexOf(array, value);
        if(index ==-1)
            return false;
        else
        return true;
        return this.indexOf(array, value) != -1;
        },
concatenate: function(a1,a2){
    for(var i=0; i<a1.length; i++){
    a2.push(a1[i])
    }
    return a2
}
}

module.exports = utils