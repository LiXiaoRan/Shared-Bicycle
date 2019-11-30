import React, { Component } from "react";
import { Card, Form, Input, Button, message, Icon, Checkbox } from "antd";
import { checkServerIdentity } from "tls";

const Item = Form.Item;
class login extends Component {
    handleSubmit() {
        let userInfo = this.props.form.getFieldsValue(); //可以获取到所有表单的值
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //验证所有的表单状态，如果发生一个错误，err就不为空
                message.success(
                    `${userInfo.userName} 恭喜你，通过验证，当前密码为 ：${userInfo.passWd}`
                );
            }
        });
    }

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
                                initialValue: "lee Ran",
                                rules: [
                                    {
                                        required: true,
                                        message: "用户名不能为空"
                                    },
                                    {
                                        min: 5,
                                        max: 10, //最小长度是5，最大长度是10
                                        message: "长度不在范围内"
                                    },
                                    {
                                        pattern: /^\w+$/g,
                                        message: "用户名必须是字母或者数字"
                                    }
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="user" />}
                                    placeholder="请输入用户名"
                                />
                            )}
                        </Item>
                        <Item>
                            {getFieldDecorator("passWd", {
                                initialValue: "123456",
                                rules: []
                            })(
                                <Input
                                    prefix={<Icon type="lock" />}
                                    placeholder="请输入密码"
                                />
                            )}
                        </Item>

                        <Item>
                            {getFieldDecorator("remberPWD", {
                                valuePropName: "checked",
                                initialValue: true,
                                rules: []
                            })(<Checkbox>记住密码</Checkbox>)}
                            <a href="#" style={{ float: "right" }}>
                                忘记密码
                            </a>
                        </Item>

                        <Item>
                            <Button
                                type="primary"
                                onClick={this.handleSubmit.bind(this)}
                                style={{ width: 300 }}
                            >
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
