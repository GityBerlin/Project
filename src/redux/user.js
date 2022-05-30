import produce from 'immer'

const initialState = {

    users: [],
    listforpost:[]

}

const reducerUser = produce((state, action) => {
    switch (action.type) {
        case 'ALL_USER':
            state.users = action.payload;
            console.log(state.users);
            break;
        case 'LIST_USER':
            state.listforpost = action.payload;
            debugger
            console.log(state.listforpost);
            break;
        default:
            break;
    }
}, initialState)

export default reducerUser;