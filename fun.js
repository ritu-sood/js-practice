//Function that takes unlimited no. of argument;


/* Normal functions
function addNumber(){   
    let res=0;
  for(let i=0;i<arguments.length;i++){
     res+=arguments[i];
  }
     return res;

}

let res=addNumber(1,5,4,3,2,10);
console.log("res",res); */

/** Arrow functions */
// addNumber(6);  // we cannot call an arrow functions before its delarations because arrow functions are not hoisted like normal functions

// const addNumber=(num)=>{
//     return console.log("num",num);
// }

//Arrow functions don't have an argument parameter bydefault like an normal funcitons
//In Arrow function, we cant used 'this' keyword . see below example, in normal funcions

// const user={
//     name:"ritu",
//     myfunctions:function(){
//         console.log("name",this.name)
//     }
// }

// user.myfunctions();


//In Arrow functions

// const user={
//     name:"ritu",
//     myfunctions:()=>{
//         console.log("name",this.name) // in this case this will prefer the window object not its collee bcz 
//     }
// }

// user.myfunctions();

// let name="Jai"

// function getUserData(){
//     // const name1="ritu"
//     console.log("name",name)
// }

// // const getUserData=()=>{
// //     const name="ritu";
// //     console.log("name",this.name)
// // }

// getUserData();

// High order functions--> the functions which excepts another functions as an arguments or returns a functions, called as high order functions.


function addNumber(x,y){
return x+y;
}
function f1(a,b,cb){
    const res=cb(a,b);
    return res;
}

console.log(f1(3,9,addNumber))





