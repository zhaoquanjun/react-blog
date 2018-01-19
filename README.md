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
  - 单一数据源 （state）
    - 整个应用的 state 被储存再一个 object tree 中，并且他只能存在于唯一一个 store 中
  - state 是只读的 （action）
    - 唯一改变 state 的方法就是触发 action ，action 是一个用于描述已发生事件的<code style='color: red'>普通对象</code>，他可以被打印、序列化、储存，后期调试回放等...
    - action 是把数据从应用传到 store 的有效荷载，是 store 数据的唯一来源，一般通过 store。dispatch() 将 action 传到 store
  - 使用纯函数来执行修改 （reducers）
    - 为了描述 action 如何改变 state tree，你需要编写 reducers，他就是纯粹的函数，接受先前的 action、state，然后返回新的
 
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


