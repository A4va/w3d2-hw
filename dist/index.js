"use strict";
// ثانيا :انشئ array باسم persons , ندخل بيانات ثلاث user
let persons = [
    { name: "Abduallah", age: 22, occupation: "Web Development" },
    { name: "Abduallah", age: 22, occupation: "Web Development" },
    { name: "Abduallah", age: 22, occupation: "Web Development" }
];
// ثالثا : انشئ function تقوم بطباعة بيانات مصفوفة persons
function printer() {
    for (let obj of persons) {
        console.log(obj);
    }
}
printer();
let admins = [{ name: "Abduallah", age: 22, specialty: "CS" }, { name: "Abduallah", age: 22, specialty: "CS" }, { name: "Abduallah", age: 22, specialty: "CS" }];
for (let obj of admins) {
    persons.push(obj);
}
console.log(persons);
// سادسا: اطبع بيانات مصفوفة persons مع التميز بين user , admin
for (const obj of persons) {
    if ("occupation" in obj) {
        console.log(`User: | Name ${obj.name} | Age ${obj.age} | Occupation  ${obj.occupation}`);
    }
    else {
        console.log(`User: | Name ${obj.name} | Age ${obj.age} | Specialty ${obj.specialty}`);
    }
}
// سادسا: اطبع بيانات مصفوفة persons مع التميز بين user , admin
function changeAge(index, age) {
    return persons[index].age = age;
}
console.log(changeAge(0, 0));
console.log(persons[0].age);
