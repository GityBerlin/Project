import produce from 'immer'

const initialState={
    
    users:[]
   

}

const reducerUser =produce((state, action)=>{
    switch (action.type) {
        case 'ALL_USER':
            debugger
            state.users = action.payload;
            debugger
            console.log(state.users);
            break; 
        default:
            break;
    }
},initialState)

export default reducerUser;