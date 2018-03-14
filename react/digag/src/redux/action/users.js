export const REGISTER_USER = 'REGISTER_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const loginAction = 
(newUser) => {
 return {
   type: LOGIN_USER,
   data: user
 }
}
