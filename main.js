let a=parseInt(prompt("enter a number"))

let reserve=(a)=>{
    let b;
    let c=0;
    while(a>0){
        b=a%10;
        a=parseInt(a/10);
        c=c*10+b;
    }
    return c
}
let ans=reserve(a);
console.log(ans);
document.write(`The given number is ${a} <br> reverse number is ${ans}`)