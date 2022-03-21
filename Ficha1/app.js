// 5
function grade(gradeP, gradeT){
    var grade = gradeP * 0.7 + gradeT * 0.3;

    console.log("A sua nota foi :"+ grade);

    if (grade < 9.5) {
        console.log("Reprovado");
    }
    else {
        console.log("Aprovado");
    }
}

//grade(12, 10);

// 6
function monthName(monthNumber){
    if (monthNumber == 1){
        console.log("Janeiro");
    }
    else if (monthNumber ==2){
        console.log("Fevereiro");
    }
    else{
        console.log("Número Inválido");
    }
}
//monthName(2);

// 7
function calculator(number1, number2, operator){
    if (operator == "+"){
        return number1 + number2;
    }
        else if (operator == "-"){
            return number1 - number2;
    }
        else if (operator == "*"){
            return number1 * number2
        }
        else if (operator == "/"){
            return number1 / number2
        }
        else if (operator == "**"){
            return number1 ** number2
        }
}

//var result = calculator(2, 2, '+');
// console.log (result)
// console.log (calculator(2, 2, '+'))

// 8
function multiple(){
    var pass = 0;
    while (pass < 20){
        console.log (pass);
        pass += 5;
    }
}
// multiple()

// 9
function number1_100(value){
    var zero= 0;
    for (var one=1; one<=value; one++){
        zero+=one
    }
    return zero;
}

// console.log (number1_100(10))

// 10

function number1_10(value){
    var zer= 0;
    for (var on=1; on<=valu; on++){
        zer*=on
    }
    return zer;
}
console.log (number1_10(5))

// 11

function min(array){
    var minV = array[0];
    for (let i = 0; 1 < array.length; i++){
        if(array[1] < minV){
            minV = array[1];
        }
    }
    return minV; 
}

