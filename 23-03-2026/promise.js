// let result=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("resolved")
//     },3000)
// })

// async function hello(){
//     console.log("A");
//     let re=await result;
//     console.log(re);
//     console.log("B")
// }
// hello();

async function hello(){
    return "Hello world"
}
console.log(hello());

//async function - async function always returns a promise 