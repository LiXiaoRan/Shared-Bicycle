import React, { Component } from 'react'
import { Card, Button, Modal } from "antd";
import './ui.less';
export default class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
        }
    }

    handleOpen(type) {
        this.setState({
            //这种方法可以替代一个一个的if字符串判断方法，type被[]包裹后就不会当成一个key，而是一个变量去解析
            [type]: true
        })
    }

    handleConfirm(type) {
        //生成一个轻量级的对话框   Modal.confirm和Modal['confirm']是一个意思，所以这里可以动态的修改
        Modal[type]({
            title: "title",
            content: "content",
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('cancel');
            }
        })
    }

    render() {
        return (
            <div>
                <Card title="基础对话框" className="card_wrap">
                    <Button type="primary" onClick={this.handleOpen.bind(this, 'showModal1')} >open</Button>
                    <Button type="primary" onClick={this.handleOpen.bind(this, 'showModal2')} >自定义页脚</Button>
                    <Button type="primary" onClick={this.handleOpen.bind(this, 'showModal3')}>顶部20px对话框</Button>
                    <Button type="primary" onClick={this.handleOpen.bind(this, 'showModal4')}>水平居中</Button>
                </Card>

                <Card title="信息确认框" className="card_wrap">
                    <Button type="primary" onClick={this.handleConfirm.bind(this, 'confirm')} >confirm</Button>
                    <Button type="primary" onClick={this.handleConfirm.bind(this, 'info')} >info</Button>
                    <Button type="primary" onClick={this.handleConfirm.bind(this, 'success')}>success</Button>
                    <Button type="primary" onClick={this.handleConfirm.bind(this, 'warning')}>warning</Button>
                </Card>

                <Modal title="open" visible={this.state.showModal1} onCancel={() => {
                    this.setState({
                        showModal1: false
                    })
                }}>
                    <p>To github.com:LiXiaoRan/Shared-Bicycle.git</p>
                </Modal>
                <Modal title="自定义页脚" visible={this.state.showModal2} okText="好的，下一步"
                    cancelText="算了吧"
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}>
                    <p>To github.com:LiXiaoRan/Shared-Bicycle.git</p>
                </Modal>
                <Modal title="顶部20px对话框" visible={this.state.showModal3}
                    style={{ top: 20 }}
                    onCancel={() => {
                        this.setState({
                            showModal3: false
                        })
                    }}>
                    <p>有点像alert</p>
                </Modal>

                <Modal title="水平垂直居中"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    style={{ top: 20 }}
                    onCancel={() => {
                        this.setState({
                            showModal4: false
                        })
                    }}>
                    <p>水平垂直居中</p>
                </Modal>
            </div>
        )
    }
}
