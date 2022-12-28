
// var sum = (arr) => arr.reduce((acc, elem) => acc+=elem, 0);

const getArr = (arr) => {
    let sum = 0;
    // var result = [];
    let result = new Set()
    for(let i=0; i<arr.length; i++) {
        result.add(sum + arr[i]);
        
        sum=sum+ arr[i];
    }
    console.log('a',result)
    return result;
}
const sum = (arr) => {
    
    // var result = 0;
    // for(let i=0; i<arr.length; i++) {
    //   result+=arr[i];
    //   console.log(result)
    // }
    // return result;
    let rs =0 
    arr = arr.forEach(value => {
        rs+= value
    });
    return rs
   
  };
console.log('@RES', sum(getArr([3,5,2,4,10].sort((a,b) =>a-b))))


// var sum = (arr) => {
//     var result = 0;
//     for(let i=0; i<arr.length; i++) {
//       result+=arr[i];
//     }
//     return result;
//   };
//   var getArr = (arr) => {
//       var sum = 0;
//       var result = [];
//       for(let i=0; i<arr.length; i++) {
//           result.push(sum + arr[i]);
//           sum+= arr[i];
//       }
//       return result;
//   }
  
//   function selectionSort(arr) {
//     let min;
  
//     //start passes.
//     for (let i = 0; i < arr.length; i++) {
//       //index of the smallest element to be the ith element.
//       min = i;
  
//       //Check through the rest of the array for a lesser element
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[min]) {
//           min = j;
//         }
//       }
  
//       //compare the indexes
//       if (min !== i) {
//         //swap
//         [arr[i], arr[min]] = [arr[min], arr[i]];
//       }
//     }
  
//     return arr;
//   }
//   console.log('@RES', sum(getArr(selectionSort([3,5,2,4,10]))));