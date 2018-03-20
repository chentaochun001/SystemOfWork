import React from 'react'
import ReactDOM from 'react-dom'
import TodoStore from './stores/TodoStore'

// import React from 'react'
// import ReactDOM from 'react-dom'
// import { observer } from 'mobx-react'
// import Store from './store'
// // 数据观察者和组件之间是观察者模式

// @observer
// class App extends React.Component {
//     render() {
//         return (
//             <div className="">
//                 <p>{this.props.store.decorated}</p>
//                 <input defaultValue={this.props.store.name}
//                 onChange={(event)=> this.props.store.name = event.currentTarget.value}/>
//             </div>

//         )
//     }
// }

// const store = new Store();
// ReactDOM.render(
//     <App store={store}/>,
//     document.body.appendChild(
//         document.createElement('div')
//     )
// )