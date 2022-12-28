//callback
const sum =(a,b,callback)=>{
    let tong= a+b
    // callback(tong)
    // setTimeout(()=>{
    //     callback(tong)
    // }, 5000)

    let i=0
    let timer = setInterval(()=>{
        callback(tong)
        i++
        if(i===5){
            clearInterval(timer)
        }
    },1000)
}

const printSum =(message)=>{
    console.log(`tong cua 5 + 4 = ${message}`)
}

sum(5,4,printSum)