const array = [
    {name: 'thu ha', age: 23},
    {name:'ha nguyen', age: 25},
    {name: 'abc', age:18}
]
const filter =array.filter((item)=>{
return (item && item.age <25)

})
console.log(filter)
