// obj={
//     name: 'ha'
// }
// console.log('log name' , obj['name'])
// const functionSort = (arr) => {
//     let oddArr = arr.filter(item => item % 2 !== 0).sort((a, b) => a - b)
//     let evenArr = arr.filter(item => item % 2 === 0).sort((a, b) => b - a)
//     return oddArr.concat(evenArr)
// }

////------------vòng for: khai báo biến trong vòng for không nên 
//dùng var vì sẽ bị closure, tức là biến đó có thể bị truy cập ngoài scope

const array = ['cay tao', 'cay me','cay oi', 'cay xoai']
// for (let item of array){
//     console.log('day la cay', item)
// }
for ( let i=0; i<array.length; i++){
    console.log(`cay so ${i +1} la :` , array[i])
}


////-------------vong while: khong co gia tri khoi tao, 

let i=0
while(i<array.length){
    console.log('dung while, cay nay la :' , array[i])
    i++
}
//--do while: chay mot lan xong moi check dieu kien, khong nen xai do while
do {
    console.log(`do while, cay nay la ${i+1}`, array[i])
}while(i<0)