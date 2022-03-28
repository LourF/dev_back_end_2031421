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
// var student1 = {
//     number: 1000,
//     grade: 16
// };
// var student2 = {
//     number: 2000,
//     grade: 12
// };
//     number: 4000,
//     grade: 6
// };
// var students = [];

// students.push(student1);
// students.push(student2);
// students.push(student3);
// students.push(student4);

// console.log(students[0].number);

var student ={
    number: 1000,
    grade: 16
};

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
    for (let i = 1; i < students.length; i++){
        if(students[i].grade < min){
            min = students[i].grade;
            worstStudent = students[i];
        }
    }
    console.log("Worst Student - Number: " + worstStudent.number + " // Grade: " + worstStudent.grade)
}

// function avarageGrade(students){ 
//     for (let i = 0; i < students.length; i++) {
//         med += students[i].grade;
//         }
//         med /= students.length;
//         return med;
//     }
//      console.log(med2 + " grade is " + med1 + " avarage class grade is: " + medGrade)

function average(students){
    var avg = 0;
    for (let i = 0; i < students.length; i++){
        avg += students[i].grade;
    }
    return avg / students.length
}


function closestToAvg(students){
    var avg= average(students);
    var student = students[0];
    var aux = Math.abs(avg - students[0].grade);
    for (var i= 1; i< students.length; i++){
        var diff= math.abs(avg - students[i].grade);{
            if (diff < aux){
            aux = diff;
            student= students[i];
            }
        }
    } 
    return student;
} 

function badGrades(students){
    var bad = 0;
    for (let i = 0; i < students.length; i++){
        if(students[i].grade < 9.5){
            bad++;
        }
    }
    return bad;
}

function goodGrades(students){
    var good = 0;
    for (let i = 0; i < students.length; i++){
        if(students[i].grade > 9.5){
            good++;
        }
    }
    return good;
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
            var student = closestToAvg(students);
            console.log("Avarage grade - Number: " + student.number + " // Grade: " + student.grade) 
            break;
        case 5:
            badGrades(students)
            break;
        case 6:
            goodGrades(students)
            break;

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
main(students, 4);