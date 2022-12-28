const giai_phuong_trinh_bac_mot=(a,b)=>{
    if(a==0&&b==0){
        console.log('phuong trinh vo so nghiem')
    }
    else if( a!=0 && b==0){
        console.log('phuowng trinh co nghiem x =0')
    }
    else if(a==0 && b!=0){
        console.log('phuong trinh vo nghiem')
    }
    else{
        console.log(`phuong trinh co nghiem x: ${-b/a}`)
    }
}
console.log(giai_phuong_trinh_bac_mot(2,3))