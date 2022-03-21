//funções
//1
function IMC(peso, altura){
    imc=peso/((altura)**2);
    if(imc<18.5){
        console.log("Abaixo do peso");
    }
    else if (imc>=18.5 && imc<25){
        console.log("No peso normal");
    }
    else if (imc>=25 && imc<30){
        console.log("Acima do peso");
    }
    else{
        console.log("Obeso");
    }
}

//2

function reverse(str) {
    var splittedStr = str.split(" ");
    var reversedStr = "";
    for (let j = 0; j < splittedStr.length; j++) {
       var word = splittedStr[j]
       for (var i = word.length - 1; i >=0; i--) {
        reversedStr+= word[i];
        }
    }  
    return reversedStr;
}

//3
function vogal(str){
    var count= 0;
    for (var i =0; i <str.length; i++){
        if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            count++;
        }
  
}
return count;    
}

//4
function countletter(str, letter){
    var count=0;
    var lower = str.toLowerCase()
    for (var i =0; i<lower.length; i++){
        if (lower[i]==letter){
            count++;
    }
}
return count;
}

//5
function countTime(entryH, entryM, entryS, exitH, exitM, exitS){
    var totalTimeE = entryH * 3600 + entryM * 60 + entryS;
    var totalTimeEx = exitH * 3600 + exitM * 60 + exitS;
    var diffInSec = totalTimeEx - totalTimeE;
    var hours = Math.floor((diffInSec /3600));
    var diffInHours = diffInSec % 3600;
    var minutes = Math.floor((diffInHours / 60));
    var secs = diffInHours % 60;

    console.log("Trabalhou H:" + hours + ":" + minutes + "m:" + secs + "s:" )
}

//6
function retangle(width, height){
    var line = "";
    for (let j = 0; j< width; j++){
        line += "*";
    }
    for (var i=0; i<height; i++) {
        console.log(line);
    }
}

//7
function triangle(height){
    var line = "*";
    for (let i= 0; i< height; i++){
        console.log(line);
        line += "*";
    }
}

//8
function box(width, height){
    for (let i = 0; i < height; i++) {
        var line = "";
        for (let j = 0; j < width; j++) {
            if(i == 0 || i == height - 1){
                line += "*";
            }
            else{
                if(j == 0 || j == width - 1){
                    line += "*";
                }
                else{
                    line += " ";
                }
            }
            
        }
        console.log(line);
    }
}

//9
// var student = {
//     number: 1000,
//     grade: 16
// };
// var student2 = {
//     number: 1001,
//     grade: 12
// };
// var student3 = {
//     number: 1002,
//     grade: 14
// };
// var students = [];
// students.push(student);
// students.push(student2)
// students.push(student3)


var students = [];
for (let i=0; i<10; i++){
    var student ={
        number: Math.ceil (Math.random()*1000),
        grade: Math.ceil (Math.random() * 20)
    };
    students.push(student);
}

function listStudents(students){
    for(let i =0; i < students.length; i++){
        var student = students[i];
        console.log("Number: " + student.number + "  //  Grade: " + student.grade)
    }
}

function bestGrade(students){
    var max = students[0].grade;
    for (let i = 1; i < students.length; i++){
        if(students[i].grade > max){
            max = students[i].grade;
            bestStudent = students[i];
        }
    }
    console.log("Best Student - Number: " + bestStudent.number + "  //  Grade: " + bestStudent.grade)
}

function worstGrade(students){
    var min = students[0].grade;
    for (let i = 1; i < stunders.length; i++){
        if(students[i].grade > min){
            min = students[i].grade;
            worstStudent = students[i];
        }
    }
    console.log("worst Student - Number: " + worstStudent.number + "  //  Grade: " + worstStudent.grade)
}

function main(students, option){
    switch (option){
        case 1:
            listStudents(students);
            break;
        case 2:
            bestGrade(students);
            break;
        case 3:
            worstGrade(students)
            break;
        case 4:

    }
}

//invocações
//IMC(50,1.30)
// console.log (reverse('Hoje e Domingo'))
// console.log(vogal("ola mundo"));
// console.log(countletter("ola mundo", 'o'));
// countTime(8, 0, 0, 9, 1, 1);
// retangle(20,10);
// triangle(10);
// box (3, 3);
// console.log(students[0].number)
main(students, 2);