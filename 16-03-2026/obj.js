// function student(studentName, studentClass, studentCity, studentMarks) {

//     this.studentName = studentName;
//     this.studentClass = studentClass;
//     this.studentCity = studentCity
//     this.studentMarks = studentMarks;

// }

// let s1 = new student("bhaskara", "MCA", "Hyd", 95);
// let s2 = new student("tony", "Mcom", "Vskp", 70);
// let s3 = new student("stark", "MBA", "Hyd", 99);

// let students = [s1, s2, s3];


// let toppers=students.find(i=>i.studentName=="tony");


// console.log(toppers)

let people=[
    {
        username:"tony stark",
        age:19
    },
    {
        username:"Chris",
        age:17
    },
    {
        username:"Hemsworth",
        age:20
    }
]
var newpeop=people.map(user=>{
        return{
            //username:user.username
            ...user,
            isAdult:user.age>18
        }
})
console.log(newpeop);

