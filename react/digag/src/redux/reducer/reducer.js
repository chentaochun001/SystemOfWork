// 模块化
// n 个renducer 
// userInfo.js author article
import { combineReducers } from 'redux';
import { users } from './users';
const reducer = combineReducers({
  users
});
export default reducer;
