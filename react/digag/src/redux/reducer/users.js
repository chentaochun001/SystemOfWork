import Immutable from 'immutable';
// 不可变，react 里 state的改变会刷新，rerender
// state没有变，没有必要去rerender
// react的性能问题 浅拷贝，深拷贝，导致代码不可控
// var obj = {}
// var obj1 = obj
// redux 使用Immutable来实现不可变的state
// 业界认为可变的state是万恶之源
// 利用json对象来形成Map
const initialState = Immutable.fromJS({
    newUser: null,
    error: null,
    saveSuccess: false,
    token: null,
    currentUser: null,
})
export const users = (state = initialState, action = {}) => {
    switch (action.type) {
        // case REGISTER_USER: 
        //     return state.merge({
        //         'newUser': action.data,
        //         'saveSuccess': false,
        //         'error': null
        //     })
        // case REGISTER_USER_SUCCESS:
        //     return state.set('saveSuccess', action.data)
        // case REGISTER_USER_FAILURE:
        //     return state.set('error', action.data)
        // case CURRENT_USER:
        //     return state.merge({
        //         'token': action.data,
        //         'error': null
        //     })
        default: 
            return state
    }
}
// initialState.set('')