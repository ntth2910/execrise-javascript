const  tree = [
    {
    title: 'item1',
     children: [
       {
           title: 'item2',
       },
       {
            title: 'item3',
            children: [
                {
                    title: 'item4',
                    children: [
                        {
                            title:'item 6'
                        }
                    ]
                },
                {   
                    title: 'item5',
                }]
       }
      ]
     }];

const searchTree =(element, matchingTitle)=>{
    if(element.title == matchingTitle){
         return element;
    }else if (element.children != null){
         var i;
         var result = null;
         for(i=0; result == null && i < element.children.length; i++){
              result = searchTree(element.children[i], matchingTitle);
         }
         return result;
         
    }
    return null;
}
// let element = tree[0];
// let result = searchTree(element, 'item5');
// console.log(result)

console.log(searchTree(tree[0],'item5'))