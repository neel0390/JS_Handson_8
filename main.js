// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//         {name: 'Baba', id: 101, marks : 23 },
//         {name: 'yaga', id: 200, marks : 45 },
//         {name: 'Wick', id: 115, marks : 75 } ]

// Q.1

//         let data = studentRecords.map((item)=>{
//             return item.name.toUpperCase()
//         })
//         console.log(data)

// Q.2

// let updatedMarks= studentRecords.filter((item)=>{
//     return  item.marks >50
// })
// console.log(updatedMarks)

// Q.3
// let newdata = studentRecords.filter(item=> item.id>120 && item.marks>50)
// console.log(newdata)

// Q.4

// let sum =0
// let sumOfMarks = studentRecords.map((item)=>{
// sum += item.marks
// })

// console.log(sum)

// Q.5

// let name = studentRecords.map((item)=>{
//     if(item.marks >50){s
//     console.log(item.name)
//     }
// })

// Q.6

// let sum = 0
// let data = studentRecords.map((item)=>{
//     if(item.id >120){
//         sum+= item.marks
//     }
// } )
// console.log(sum)

// Q.7
// let data = studentRecords.map((item)=>{
//     if(item.marks >50){

//     }
// })

let StuArray = [];
const Student = (name, className, rollno) => {
  (this.StuName = name), (this.stuClass = className), (this.StuRollNo = rollno);
};

let Student1 = new Student("EA17", "Sept", 1);
let Student2 = new Student("EA16", "Aug", 2);
let Student3 = new Student("EA18", "Oct", 3);
let Student4 = new Student("EA19", "Nov", 4);
let Student5 = new Student("EA20", "Dec", 5);
let Student6 = new Student("EA21", "Jan", 6);

StuArray.push(Student1);
StuArray.push(Student2);
StuArray.push(Student3);

console.log(StuArray);
