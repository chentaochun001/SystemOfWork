// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import {registerAction, loginAction} from '../../redux/action/users'
// // redux如何到ui组件中去，用connect
// import  {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
// // redux container概念 每个父组件会和redux通信，
// // props， actions => 子组件
// import App from './containers/App/App';
// import 'element-theme-default'
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
// // connect 就在返回时加一层redux
// // react风格：什么都喜欢JSX 组件化指令
// export default connect(
//     (state) => {
//         return {
//             users: state.users
//         },
//         (dispatch) => {
//             return {
//                 registerActions: bindActionCreators(registerAction, dispatch),
//                 loginActions: bindActionCreators(loginAction, dispatch)
//             }
//         }
//     }
// )(App)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// redux container概念 父组件 redux 通信
// props, actions => 子组件
import App from './containers/App/App';
import 'element-theme-default'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './redux/store/store'

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();

