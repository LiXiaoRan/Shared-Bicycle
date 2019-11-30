import React, { Component } from "react";
import { Card, Form, Input, Button } from "antd";

const Item = Form.Item;
class login extends Component {
    render() {
        // antd封装的form,用来做表单功能的封装.相当于双向数据绑定
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登陆inline表单">
                    <Form layout="inline">
                        <Item>
                            <Input placeholder="请输入用户名" />                            
                        </Item>
                        <Item>
                            <Input placeholder="请输入密码" />
                        </Item>

                        <Item>
                            <Button type="primary">登陆</Button>
                        </Item>
                    </Form>
                </Card>
                <Card
                    title="登陆水平(horizontal)表单"
                    style={{ marginTop: 10 }}
                >
                    <Form layout="horizontal" style={{ width: 300 }}>
                        <Item>
                            {getFieldDecorator("userName", {
                                initialValue: "lee",
                                rules: []
                            })(<Input placeholder="请输入用户名" />)}
                        </Item>
                        <Item>
                            {getFieldDecorator("passWd", {
                                initialValue: "123456",
                                rules: []
                            })(<Input placeholder="请输入密码" />)}
                        </Item>
                        <Item>
                            <Button type="primary" style={{ width: 300 }}>
                                登陆
                            </Button>
                        </Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

// const FormLogin = Form.create()(login);
export default Form.create()(login);
