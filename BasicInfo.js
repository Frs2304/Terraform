let jsonObj ={
    "name": "Tushar Mishra",
    "Blog": "tusharmishra.dev",
    "study": "Engineering",
    "field": "Computer Science"
}
console.log(jsonObj);
let myJsonStr = JSON.stringify(jsonObj);
console.log(myJsonStr);

 // making some changes in Json file
 myJsonStr = myJsonStr.replace('Tushar', 'Yash');
 console.log(myJsonStr);