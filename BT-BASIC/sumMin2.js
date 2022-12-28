// const getArr=(arr)=>{
//     let sum =0
//     let result = new Set()
//     for(let i=0; i<arr.length; i++){
//         result.add(sum + arr[i])
//         sum+= arr[i]
//     }
//     return result
// }
// const sumGetArr= (arr=[])=>{
// let sum =0
// arr=arr.forEach(value=>{
//     sum+=value
// })
// return sum;
// }
// console.log('@RES', sumGetArr(getArr([3,5,2,4,10].sort((a,b) =>a-b))))


// vieets laji cho hieeur
const getArr = (arr)=>{
    let sum =0;
    let result = [];
    for(let i=0; i<arr.length; i++){
        result.push(sum+ arr[i])
        sum+=arr[i]
    }
    console.log(result)
    return result;
}

const sumOfGetArr =(arr)=>{
    let sum =0;
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(arr)
    return sum;


    // let sum =0 
    // arr = arr.forEach(value => {
    //     sum+= value
    // });
    // console.log(sum)
    // return sum
    
}

console.log('@RES', sumOfGetArr(getArr([3,5,2,4,10].sort((a,b) =>a-b))))