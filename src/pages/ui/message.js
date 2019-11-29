import React, { Component } from 'react'
import { Card, message, Button } from "antd";
import './ui.less';

export default class Message extends Component {
    handlecCreateMessage(type) {
        message[type]("恭喜你，成功了")
    }

    render() {
        return (
            <div>
                <Card title="全局提示框" className="card_wrap">
                    <Button type="primary" onClick={this.handlecCreateMessage.bind(this,'success')}>success</Button>
                    <Button type="primary" onClick={this.handlecCreateMessage.bind(this,'info')}>info</Button>
                    <Button type="primary" onClick={this.handlecCreateMessage.bind(this,'warning')}>warning</Button>
                    <Button type="primary" onClick={this.handlecCreateMessage.bind(this,'error')}>error</Button>
                    <Button type="primary" onClick={this.handlecCreateMessage.bind(this,'loading')}>loading</Button>
                </Card>
            </div>
        )
    }
}
