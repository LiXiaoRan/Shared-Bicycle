import React, { Component } from "react";
import { Card, Form, Input, Button } from "antd";

const Item = Form.Item;
export default class login extends Component {
    render() {
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
            </div>
        );
    }
}
