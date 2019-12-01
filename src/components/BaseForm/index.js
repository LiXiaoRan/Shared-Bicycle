import React, { Component } from "react";
import PropTypes from "prop-types";
import Utils from "../../utils/utils";
import { Input, Select, Form, Button, Checkbox, Radio } from "antd";

const FormItem = Form.Item;
const Opetion = Select.Option;
class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.handleFilterSubmit=this.handleFilterSubmit.bind(this)
        this.reset=this.reset.bind(this);
    }
    

    static defaultProps = {
        formList: []
    };

    static propTypes = {
        formList: PropTypes.array
    };


    handleFilterSubmit(){
        let fieldValue=this.props.form.getFieldsValue();
        this.props.filterSubmit(fieldValue);
    }

    initFormList = () => {
        const { getFieldDecorator } = this.props.form;
        const formList = this.props.formList;
        const formItemList=[];
        if (formList && formList.length > 0) {
            formList.forEach((item, i) => {
                let label = item.label;
                let field = item.field;
                let initValue = item.initialValue || "";
                let placeHolder = item.placeHolder;
                let width = item.width;
                if (item.type === "SELECT") {
                    const SELECT = (
                        <FormItem label={label} key={field}>
                            {getFieldDecorator([field], {
                                initialValue: initValue,
                                rules: []
                            })(
                                <Select
                                    placeholder={placeHolder}
                                    style={{ width: width }}
                                >
                                    {Utils.getOptionList(item.list)}
                                </Select>
                            )}
                        </FormItem>
                    );
                    formItemList.push(SELECT);
                } else if (item.type === "INPUT") {
                    const INPUT = (
                        <FormItem label={label} key={field}>
                            {getFieldDecorator([field], {
                                initialValue: initValue,
                                rules: []
                            })(
                                <Input
                                    placeholder={placeHolder}
                                    style={{ width: width }}
                                    type="text"
                                />
                            )}
                        </FormItem>
                    );
                    formItemList.push(INPUT);

                } else if (item.type === "CHECKBOX") {
                    const CHECKBOX = (
                        <FormItem label={label} key={field}>
                            {getFieldDecorator([field], {
                                valuePropName: "checked",
                                initialValue: false,
                                rules: []
                            })(<Checkbox> {label}</Checkbox>)}
                        </FormItem>
                    );
                    formItemList.push(CHECKBOX);
                }
            });
        }
        return formItemList;
    };

    render() {
        return (
            <div>
                <Form>
                    {this.initFormList()}
                </Form>
                <FormItem>
                    <Button style={{margin:'0,20px'}} type="primary" onClick={this.handleFilterSubmit}>查询</Button>
                    <Button onClick={this.reset}>重置</Button>
                </FormItem>
            </div>
        );
    }
}

FilterForm = Form.create({})(FilterForm);
export default FilterForm;
