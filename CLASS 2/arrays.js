const a = [1, 2, 3, 4];

console.log(a);

a.push(5);
console.log(a);

console.log(a[0]);

for (let i = 1; i <= a.length; i++) {
  console.log(a[i - 1]);
}


 
const students = [
    {
        name:"Anant",
        roll:20,
        enroll:"AYUSH7070",
        contact:1234567890
    },
    {
        name:"AYUSH",
        roll:21,
        enroll:"AYUHHHHH",
        contact:21212122221
    }
]

const rollTwenty = students.find((value,index)=> value.roll === 30)  // TO FIND SPECIFIC DATA

console.log(rollTwenty?.contact) // ? For null check 

const studentNames = students.map((value,index)=> value.name)  // MAP USED TO TRANSFORM AN ARRAY EX: [{name:"AK",mob:1},{name:"AY",mob:21}]  -> ["AK","AY"]

console.log(studentNames)