//no validate
// let sum = (a,b)=>{
//     return ( a+b)
// }


//validate data
// let sum = (a,b)=>{
//     a= Number(a);
//     b= Number(b);
//     if(isNaN(a)|| isNaN(b)){
//         return false
//     }
//     return a+b;
// }

//sum ket hop try catch 
let sum = (a,b)=>{
    try {
        a= Number(a);
        b= Number(b);
        if(isNaN(a)|| isNaN(b)){
            throw new Error (" value is not number")
        }
        return a+b
    }
    catch(e){
        console.log(e.message)
        return false
    }
}
console.log(3+4)