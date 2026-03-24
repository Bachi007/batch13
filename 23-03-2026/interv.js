var arr=[5,7,12,30,46,42];

arr.forEach((ele,ind)=>{
    setTimeout(()=>{
        console.log(ele);
    },(ind+1)*1000)
})