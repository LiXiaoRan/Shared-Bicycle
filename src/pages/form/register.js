/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
    Card,
    Form,
    Input,
    Radio,
    Button,
    message,
    Icon,
    Checkbox,
    Switch,
    DatePicker,
    TimePicker,
    Upload,
    InputNumber,
    Select
} from "antd";
import moment from "moment";
const Option = Select.Option;
const FormItem = Form.Item;
const TextArea = Input.TextArea;
class register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // userImg: []
        }
    }

    handleSubmit(){
        //处理注册事件
        let userInfo=this.props.form.getFieldsValue();
        //this.props.form.resetFieldsValue即可重制页面表单的值
        console.log(JSON.stringify(userInfo));
        message.success(JSON.stringify(userInfo))
    }


    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    userImg: imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            //根据不同的屏幕尺寸自适应占据的列数
            labelCol: {
                //label
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                //文本框
                xs: 24,
                sm: 12
            }
        };

        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    //在sm状态下，跨12列，向右偏移4列
                    span: 12,
                    offset: 4
                }
            }
        }
        return (
            <div>
                <Card title="注册">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {getFieldDecorator("userName", {
                                initialValue: "leeRan",
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
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {getFieldDecorator("passWd", {
                                initialValue: "123456",
                                rules: [
                                    {
                                        required: true,
                                        message: "密码不能为空"
                                    }
                                ]
                            })(
                                <Input
                                    type="password"
                                    prefix={<Icon type="lock" />}
                                    placeholder="请输入密码"
                                />
                            )}
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {getFieldDecorator("sex", {
                                initialValue: "1",
                                rules: [
                                    {
                                        required: true,
                                        message: "性别不能为空"
                                    }
                                ]
                            })(
                                <Radio.Group>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>
                                </Radio.Group>
                            )}
                        </FormItem>

                        <FormItem label="年龄" {...formItemLayout}>
                            {getFieldDecorator("age", {
                                initialValue: "18",
                                rules: []
                            })(<InputNumber />)}
                        </FormItem>

                        <FormItem label="当前状态" {...formItemLayout}>
                            {getFieldDecorator("status", {
                                initialValue: "4",
                                rules: []
                            })(
                                <Select>
                                    <Option value="1">咸鱼1</Option>
                                    <Option value="2">咸鱼2</Option>
                                    <Option value="3">咸鱼3</Option>
                                    <Option value="4">百度FE</Option>
                                </Select>
                            )}
                        </FormItem>

                        <FormItem label="爱好" {...formItemLayout}>
                            {getFieldDecorator("hobby", {
                                initialValue: "4",
                                rules: []
                            })(
                                <Select mode="multiple">
                                    <Option value="1">唱</Option>
                                    <Option value="2">跳</Option>
                                    <Option value="3">rap</Option>
                                    <Option value="4">篮球</Option>
                                </Select>
                            )}
                        </FormItem>

                        <FormItem label="是否已婚" {...formItemLayout}>
                            {getFieldDecorator("isMarred", {
                                valuePropName: "checked",
                                initialValue: true,
                                rules: []
                            })(<Switch />)}
                        </FormItem>

                        <FormItem label="出生日期" {...formItemLayout}>
                            {getFieldDecorator("birthday", {
                                initialValue: moment("2019-11-30"),
                                rules: []
                            })(<DatePicker />)}
                        </FormItem>

                        <FormItem label="通信地址" {...formItemLayout}>
                            {getFieldDecorator("address", {
                                initialValue: "绵阳市涪城区西南科大",
                                rules: []
                            })(
                                <TextArea
                                    autoSize={{ minRows: 4, maxRows: 6 }}
                                />
                            )}
                        </FormItem>

                        <FormItem label="上班时间" {...formItemLayout}>
                            {getFieldDecorator("time", {
                                //initialValue: "",
                                rules: []
                            })(<TimePicker />)}
                        </FormItem>

                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImgInfo')(
                                   
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg ? <img alt="fault" src={this.state.userImg} /> : <Icon type="plus" />}
                                    </Upload>

                                    
                                )
                            }
                        </FormItem>


                        <FormItem  {...offsetLayout}>
                            {getFieldDecorator("isArrge", {
                                valuePropName: "checked",
                                initialValue: true,
                                rules: []
                            })(<Checkbox >必须要同意这个<a href="#">霸王条款</a>，哈哈哈</Checkbox>)}
                        </FormItem>

                        

                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit.bind(this)}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(register);
