//-- có thể sử dụng for,while, map, forEach, reduce, reduceRight

//--for--
// const sumArray =(array)=>{
//     let sum =0;
//     for(i=0; i< array.length; i++){
//         sum += array[i]
//     }
//     return sum;
// }

//--while
// const sumArray =(array)=>{
//     let i=0;
//     let sum=0;
//     while(i<array.length){
//         sum+=array[i]
//         i++
//     }
//     return sum;
// }

//--forEach
// const sumArray =()=>{
//     let sum =0;
//     array.forEach((value)=>{
//         sum +=value
//     })
//     return sum;
// }

//--map
const sumArray = ()=>{
    let sum =0
    array.map((value)=>{
        sum+= value
    })
    return sum
}
let array =[1,2,3,4,7]
console.log(sumArray(array))