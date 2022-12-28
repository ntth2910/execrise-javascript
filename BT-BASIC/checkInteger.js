// const checkInteger =(value)=>{
//     return (Number.isInteger(value)&& value >0)
// }

const checkInteger = (value)=>{
    return ( value %1 ===0 && value <0)
}
console.log('check',checkInteger(-4848))