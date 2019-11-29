import React, { Component } from 'react'
import { Card, Button,notification} from "antd";
import './ui.less';

export default class Notice extends Component {

    openNotifycation(type,direction){
        if (direction) {
            notification.config({
                //这个是全局配置
                placement:direction
            })
        }
        notification[type]({
            message:"notification.success",
            description:"这里是description"
        });
    }

    render() {
        return (
            <div>
                <Card title="通知提醒框" className="card_wrap">
                <Button type="primary" onClick={this.openNotifycation.bind(this,'success')}>success</Button>
                <Button type="primary" onClick={this.openNotifycation.bind(this,'info')}>info</Button>
                <Button type="primary" onClick={this.openNotifycation.bind(this,'warning')}>warning</Button>
                <Button type="primary" onClick={this.openNotifycation.bind(this,'error')}>error</Button>
                </Card>

                <Card title="通知提醒框" className="card_wrap">
                <Button type="primary" onClick={this.openNotifycation.bind(this,'success','topLeft')}>topLeft success</Button>
                <Button type="primary" onClick={this.openNotifycation.bind(this,'info','topRight')}>topRight info</Button>
                <Button type="primary" onClick={this.openNotifycation.bind(this,'warning','bottomLeft')}>bottomLeft warning</Button>
                <Button type="primary" onClick={this.openNotifycation.bind(this,'error','bottomRight')}>bottomRight error</Button>
                </Card>
            </div>
        )
    }
}
