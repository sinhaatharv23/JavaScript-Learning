/*
⭐ MINI PROJECT (NO map/filter yet)

Create folder:

mini-projects/day_2_basic/


File:

studentManager.js


Write functions to:

✔ Add a student (object) to an array
✔ Delete a student by name
✔ Update a student's age
✔ Print all students in format:
Name: <name>, Age: <age>, City: <city>


Example student:

{ name: "Atharva", age: 20, city: "Pune" }


This can be done using:

arrays

loops

objects

functions

Everything you already know.
*/
let students = [];
function addStudent(student){
    students.push(student);
}
function deleteStudent(name){
    for (let i = 0; i < students.length; i++) {
            if(name===students[i].name){
            students.splice(i,1);
            return;
            }
    }
}
function updateAge(name,newAge){
    for (let i = 0; i < students.length; i++) {
        if(students[i].name===name){
            students[i].age = newAge;
            return;
        }
    }
}
function printStudents(){
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        console.log(`Name:${student.name}, Age:${student.age},City:${student.city}`);
    }
}

addStudent({name:"Atharva",age:20,city:"Pune"});
addStudent({name:"Aman",age:19,city:"Mumbai"});
addStudent({name:"Akshat",age:21,city:"Delhi"});
updateAge("Aman",20);
deleteStudent("Akshat");
printStudents();