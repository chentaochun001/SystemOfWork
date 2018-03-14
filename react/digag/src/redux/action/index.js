export const REGISTER_USER = 'REGISTER_USER'
export const registerAction = (newUser) => {
 // action 负责，提交reducer
 return {
   type: REGISTER_USER,
   data: newUser
 }
}
