import axios from "axios";

export function getUser1(){
    return axios.get('https://jsonplaceholder.typicode.com/users',{})
.then((res)=>{
    if(res&&res.data)
    return res.data
})
.catch((err)=>{
    console.log(err)
})
}

// export function getUser1(){
//     return axios.get('https://jsonplaceholder.typicode.com/posts',{})
// .then((res)=>{
//     if(res&&res.data)
//     return res.data
// })
// .catch((err)=>{
//     console.log(err)
// })
// }