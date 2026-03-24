// var num=7;
// isPrime=true;

// if(num%2==0 || num%3==0){
//     isPrime=false;
// }
// else{for(let i=5;i<num;i+=6){
//     if(num%i==0 || num%(i+2)==0){
//         isPrime=false;
//         break;
//     }
// }
// }
// if(isPrime && num>1){
//     console.log("Prime number");
// }
// else{
//     console.log("Not Prime")
// }
var num=7;
var count=0;
for(let i=1;i<=num;i++){
    if(num%i==0)
        count++
}
if(count==2){
    console.log("Prime")
}
else{
    console.log("not prime")
}



