import React from 'react'
import PropTypes from 'prop-types'
import { message } from 'antd'
/*
* 使用React.Children.map渲染列表，适用于多个子元素的情况
* <ReactChildrenMap>
*   <div>渲染内容</div>
*   <div>渲染内容</div>
* </ReactChildrenMap>
* */
function warningFunc(children) {
    if (typeof children !== 'object') {
        message.info('你可能传入空元素，请传入react组件或者是DOM节点，children：%s')
        return false
    }
    return true
}
export default class ReactChildrenMap extends React.PureComponent {
    render() {
        if (warningFunc(this.props.children)) {
            return React.Children.map(this.props.children, children => children)
        }
    }
}
ReactChildrenMap.propTypes = {
    children: PropTypes.array
}