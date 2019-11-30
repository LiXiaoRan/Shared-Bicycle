import React, { Component } from "react";
import { Card, Table } from "antd";
// 基础表格
export default class BasicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [], //表头
            dataSource: [] //数据源
        };
    }

    componentDidMount() {
        this.initTableData();
    }
    /**
     * 初始化数据
     */
    initTableData() {
        let columns = [
            {
                title: "id",
                dataIndex: "id",
                key: "id"
            },
            {
                title: "用户名",
                dataIndex: "userName",
                key: "userName"
            },
            {
                title: "性别",
                dataIndex: "sex",
                key: "sex"
            },
            {
                title: "状态",
                dataIndex: "status",
                key: "status"
            },
            {
                title: "爱好",
                dataIndex: "hobby",
                key: "hobby"
            },
            {
                title: "生日",
                dataIndex: "birthday",
                key: "birthday"
            },
            {
                title: "地址",
                dataIndex: "address",
                key: "address"
            },
            {
                title: "起床时间",
                dataIndex: "time",
                key: "time"
            }
        ];
        let dataSource = [
            {
                id: "0",
                key: "0",
                userName: "Lee",
                sex: "1",
                status: "1",
                hobby: 1,
                birthday: "2000-01-01",
                address: "绵阳市西科大",
                time: "7:40"
            },
            {
                id: "1",
                key: "1",
                userName: "Jack",
                sex: "1",
                status: "1",
                hobby: 1,
                birthday: "2000-01-01",
                address: "绵阳市西科大",
                time: "7:40"
            },
            {
                id: "2",
                key: "2",
                userName: "Tom",
                sex: "1",
                status: "1",
                hobby: 1,
                birthday: "2000-01-01",
                address: "绵阳市西科大",
                time: "7:40"
            }
        ];
        this.setState({
            columns,
            dataSource
        });
    }

    render() {
        console.log(this.state.columns);
        console.log(this.state.dataSource);

        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        dataSource={this.state.dataSource}
                        columns={this.state.columns}
                    />
                </Card>
            </div>
        );
    }
}
