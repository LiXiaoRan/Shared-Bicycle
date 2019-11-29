import React, { Component } from 'react';
import { Card, Spin, Icon, Alert } from "antd";
import './ui.less';

export default class Loading extends Component {
    render() {
        const icon = <Icon type="loading" style={{ fontSize: 24 }} />
        return (
            <div>
                <Card title="spin用法" className="card_wrap">
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                    <Spin indicator={icon}></Spin>
                </Card>

                <Card title="内容遮罩" className="card_wrap">
                    <Alert title="title" type="info" description="description description description"></Alert>
                    <Alert title="title" type="warning" description="description description description"></Alert>
                    <Spin tip="加载中">
                        <Alert title="title" type="error" description="description description description"></Alert>
                    </Spin>
                    <Spin tip="加载中" indicator={icon}>
                        <Alert title="title" type="error" description="description description description"></Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}
