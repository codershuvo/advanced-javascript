const students = [
    {id:21, name:"Omar Sunny"},
    {id:31, name:"Mannaaaa"},
    {id:41, name:"Moyouri"},
    {id:71, name:"Dipjol"}
];

// let studentsName = []; 
// for (let i = 0; i < students.length; i++) {
//     const element = students[i]; 
//     studentsName.push(element.name); 
// }
// console.log(studentsName); 


const names = students.map(s => s.name); 
const ids = students.map(s => s.id); 
const bigger = students.filter(s => s.id > 40); 
const biggerOne = students.find(s => s.id > 40); 
console.log(biggerOne); 