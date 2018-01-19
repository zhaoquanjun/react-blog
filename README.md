This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## react-router v4 相比于 v3 的变化

* 相比于 v3 版本，在 v4 中 react-router-dom 相比于 react-router
  多出了 <Link>、<BrowserRouter> 这样的 DOM 组件；因此，尽量引用 react-router-dom.

  * <BrowserRouter> 取代了之前的 browserHistory ，本身是就是一个使用 HTML5 的高阶路由组件，可以保证 UI 界面和 URL 保持同步（还有 HashRouter...）
  * basename: string -> 为所有位置添加一个基准的 URL（对于二级目录很有用）
  * getUserConfirmation: func -> 导航到指定页面之前执行的函数（对于进入页面之前有必要操作的页面有用，用的不多）
  * forceRefresh: bool -> 当浏览器不支持 HTML5 的 history API 的时候强制刷新页面

* 在 V4 中，Router 中只能存在一个子元素，否则会报错

## redux
  ### 三大基本原则
  - 单一数据源 （store）
    - 整个应用的 state 被储存再一个 object tree 中，并且他只能存在于唯一一个 store 中
    - Store 的职责
      > 1、维持应用的state；
      > 2、提供 getState() 获取state；
      > 3、提供 dispatch(action) 更新 state；
      > 4、通过subscribe(listener) 注册监听器；
      > 5、通过subscribt(listener) 返回的函数注销监听器
    - 创建 store
    <pre>
      import { createStore } from 'redux'
      import { todoApp } from './reducers/reducer' // 引入主 reducers 
      let store = createStore(todoApp);  // 创建 store
    </pre>
    > createStore 共有两个参数，第二个是可选的，用于设置 state 的初始状态


  - state 是只读的 （action）
    - 唯一改变 state 的方法就是触发 action ，action 是一个用于描述已发生事件的<code>普通对象</code>，他可以被打印、序列化、储存，后期调试回放等...
    - action 是把数据从应用传到 store 的有效荷载，是 store 数据的唯一来源，一般通过 store.dispatch() 将 action 传到 store
    - 约定 action 中必须使用一个字符串类型的 type 来表示要执行的动作：
    <pre>
      const ADD_TODO = 'ADD_TODO';
      {
        type: ADD_TODO,
        text
      }
    </pre>
    > 'action 创建函数' 和 action 是区别开的，action 是一个普通对象，而 action 创建对象是生成 action 的方法
    - 示例代码：
    <pre>
      actions.js
      /* action 类型 */
      export const ADD_TODO = 'ADD_TODO';
      export const TOGGLE_TODO = 'TOGGLE_TODO';
      export const SET_VISIBLITY_FILTER = 'SET_VISIBILITY_FILTER'

      /* 其他的常亮 */
      export const VisiblityFilters = {
        SHOW_ALL: 'SHOW_ALL',
        SHOW_COMPLETED: 'SHOW_COMPLETED',
        SHOW_ACTIVE: 'SHOW_ACTIVE'
      }

      /* action 创建函数 */
      export function addTodo(text){
        return{type:'ADD_TODO, text}
      }
      ...
    </pre>


  - 使用纯函数来执行修改 （reducers）
    - 为了描述 action 如何改变 state tree，你需要编写 reducers，他就是纯粹的函数，接受先前的 action、state，然后返回新的
    <pre>
      (previousState,action) => newState
    </pre>
    > 之所以称作 reducer 是因为要被传递给 Array.prototype.reduce(reducer,?initialValue)方法，保持 reducer 的纯净非常重要，，永远不要在他里面做一下的操作：
      1.修改传入函数
      2.执行有副作用的操作，如 API 操作和路由跳转
      3.调用非纯函数，如 Date.now() Math.random()
    - 首次执行时，state 为 undefined，此时可借机设置并且返回应用的初始 state
    <pre>
      import { VisiblityFilters } from 'action
      const initialState = {
        visiblityFilter: VisiblityFilters.SHOW_ALL,
        todos: []
      }

      function todoApp (state = initialState, action){
        switch(action.type){
          case SET_VISIBLITY_FILTER:
            return Object.assign({},state,{
              visiblityFilter: action.filter
            })
          default: 
            return state
        }
      }
    </pre>
    > 1、因为 reducer 是不会修改本身的 state ，他要做的是接受旧的，返回一个新的，因此 assign({},state,...) 是一定的；或者{...state,...newState}</br>
    > 2、default 情况下一定要返回旧的 state，遇到未知的action时，都要返回旧的 state
 
## Available Scripts

### to start the project

  ```
    yarn start
  ```
  or
  ```
    npm run start
  ```
### to build the project

  ```
    yarn build
  ```
  or
  ```
    npm run build
  ```


