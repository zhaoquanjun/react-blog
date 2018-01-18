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


