/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((element)=>element["profession"]=="developer"?console.log(element):"")
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element)=>element["profession"]=="developer"?console.log(element):"")
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",profession:"intern"})
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  let newArr = arr.filter((element)=>element["profession"]!=="admin")
  console.log(newArr)
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 5, name: "wick", age: "22", profession: "tester" },
    { id: 6, name: "joy", age: "23", profession: "backend_developer" },
    { id: 7, name: "johar", age: "24", profession: "cloud_engineer" },
  ]
  let concatArr = arr.concat(arr2)
  console.log(concatArr)

}
