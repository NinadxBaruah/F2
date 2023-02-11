/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];



function PrintStudentswithMap() {
  //Write your code here , just console.log

  arr.map((arr) => {
    if (arr.marks > 50) {
      console.log("Id:"+ arr.id + " " + "Name:"+ arr.name + " " +"Age:"+ arr.age + " " +"Marks:"+ arr.marks);
    }
  });

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
arr.forEach((arr) =>{
    if(arr.marks > 50){
        console.log("Id:"+ arr.id + " " + "Name:"+ arr.name + " " +"Age:"+ arr.age + " " +"Marks:"+ arr.marks);
    }
})
 
}

function addData() {
  //Write your code here, just console.log
   let newData = {id:4,name:"susan",age:"20",marks:45};
  arr.push(newData);
  console.log(arr);

}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter((arr) => arr.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let new_arr = [
    { id: 4, name: "Ninad", age: "21", marks: 99 },
    { id: 5, name: "John", age: "23", marks: 88 },
    { id: 6, name: "Bhaskar", age: "24", marks: 75 },
  ];
  let concatenate = arr.concat(new_arr);
  console.log(concatenate);
}
