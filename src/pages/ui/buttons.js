import React, { Component } from 'react'
import { Card, Button, Radio } from "antd";
import './ui.less';
export default class Buttons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            size: 'default'
        }
    }



    handleClickLoading(e) {
        alert(e.target.innerHTML)
        this.setState({
            loading: false
        })
    }

    handleRadioChange(e) {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Card title="基础按钮" className="card_wrap">
                    <Button type="primary">按钮</Button>
                    <Button >按钮</Button>
                    <Button type="dashed">按钮</Button>
                    <Button type="danger">按钮</Button>
                    <Button type="disabled">按钮</Button>
                </Card>
                <Card title="图形按钮" className="card_wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card_wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" loading={this.state.loading} shape="circle"></Button>
                    <Button loading={this.state.loading} >点击加载</Button>
                    <Button loading={this.state.loading} shape="circle"></Button>
                    <Button type="primary" onClick={this.handleClickLoading.bind(this)}>关闭</Button>
                </Card>
                <Card title="按钮组" style={{ marginBottom: 10 }}>
                    <Button.Group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
                </Card>

                <Card title="按钮尺寸" className="card_wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleRadioChange.bind(this)}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size} >按钮</Button>
                    <Button type="primary" size={this.state.size} >按钮</Button>
                    <Button type="primary" size={this.state.size} >按钮</Button>
                </Card>
            </div>
        )
    }
}
