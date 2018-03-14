// 模块化
// 有n 个reducer users.js用户模块 auth article
import { combindeReducers } from 'redux';
import { users } from './users';
const reducer = combindeReducers({
    users 
})
export default reducer