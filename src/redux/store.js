import {createStore,combineReducers} from "redux";
import reducerUser from './user';
import produce from 'immer'

const reducer = combineReducers({ reducerUser })
const store = createStore(reducer);


 window.store= store;
 export default store;