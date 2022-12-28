const so_nguyen_to =(x)=>{
    let flag= true;
    if(x<2){
        flag=false;
        console.log('x khong phai la so nguyen to')
    }
    else{
        //lap tu 2 den n-1
        for(i=2;i<x-1;i++){
            if(x%i==0){
                flag=false
                return; //break
            }
        }
    }
    if(flag===true){
        console.log(x , 'la so nguyen to')
    }
    else{
        console.log(x, 'khong phai la so nguyen to')
    }
}
console.log(so_nguyen_to(2))
