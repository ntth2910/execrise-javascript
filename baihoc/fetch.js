const url = 'https://reqres.in/api/users?page=2'

fetch(url)
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.error(err))

//using axios