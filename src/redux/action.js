export function allUser(user){
    debugger
    console.log(user);
    return {type:'ALL_USER',payload:user}
}
export function listUserPost(user){
debugger
    console.log("store",user);
    return {type:'LIST_USER',payload:user}
}
