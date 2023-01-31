// أولا : قم بكتابة interface اسمها User تتكون من :
interface User{
    [key: string]:any
    name:string,
    age:number,
    occupation?:string
}

// ثانيا :انشئ array باسم persons , ندخل بيانات ثلاث user
let persons: User[] = [
    {name:"Abduallah", age:22, occupation:"Web Development"},
    {name:"Abduallah", age:22, occupation:"Web Development"},
    {name:"Abduallah", age:22, occupation:"Web Development"}
]

// ثالثا : انشئ function تقوم بطباعة بيانات مصفوفة persons
function printer(){
    for (let obj of persons) { console.log(obj); }
}
printer()

// رابعا :انشئ interface جديدة باسم Admin , تتكون من :
interface Admin extends User{
    specialty: string;
}

// خامسا : أدخل بيانات ثلاث Admin على مصفوفة persons . بستخدام Aliases انشاء type يجمع بين user , admin
type AdminsAndUsers = (Admin | User)
let admins: AdminsAndUsers[] = [{ name: "Abduallah", age: 22, specialty: "CS" }, { name: "Abduallah", age: 22, specialty: "CS" }, { name: "Abduallah", age: 22, specialty: "CS" }];
for (let obj of admins) {
    persons.push(obj)    
}
console.log(persons);

// سادسا: اطبع بيانات مصفوفة persons مع التميز بين user , admin
for (const obj of persons) {
    if("occupation" in obj) { console.log(`User: | Name ${obj.name} | Age ${obj.age} | Occupation  ${obj.occupation}`) }
    else {console.log(`User: | Name ${obj.name} | Age ${obj.age} | Specialty ${obj.specialty}`) }
}

// سادسا: اطبع بيانات مصفوفة persons مع التميز بين user , admin
function changeAge(index: number, age: number) {
    return persons[index].age = age
}
console.log(changeAge(0,0));
console.log(persons[0].age);

