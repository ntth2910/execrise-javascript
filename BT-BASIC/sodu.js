const soDu = ( A, n,k) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] % k !== 0) 
         count++
    
}
    return  count
};
let A = [2, 4, 7, 6, 8,3,7,9];
let n = A.length;
let k = 2;
console.log(soDu(A, n,k));

// function countKdivPairs(A, n, K)
// {
//     // variable for storing answer
//     let count = 0
 
//     for (let i = 0; i < n; i++) {
       
 
//             // if pair sum is divisible
            // if (A[i] % K !== 0)
 
//                 // Increment count
//                 count++
       
//     }
 
//     return count
// }
 
// // Driver code
// let A = [ 2, 2, 1, 7, 5, 3 ]
// let n = A.length
// let K = 2
 
// // Function call
// console.log(countKdivPairs(A, n, K))