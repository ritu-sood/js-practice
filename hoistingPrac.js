// console.log("values",a);
// const  a=5;
// console.log(a)

// var a=2;
// var a=3; // Working fine. it allowed to redeclare functional scoped varibaled and assigned newset value to it like it assign 3 to a instead of 2 // which is the biggest problem with var keyword.
 
// console.log(a);




// let a=2;
// // let a=3; // Error-- cannot redeclare block scoped variable
// console.log(a);

function f1(){
    var a =2;
//     let b=4;

//     {
//         console.log("before,in  inner block", a);
//         var a=8;
//         let b=5;
//         console.log("after, inner block", a,b);
//     }
//     console.log("outer block",a,b);


}
f1();

    console.log("outer block", a,)
