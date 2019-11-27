import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <div>
                动态路由 info  this.props.match.params.(这里是前面定义的名字mainId)
                动态路由的值是：{this.props.match.params.mainId}
            </div>
        )
    }
}
