import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./index.less"
import { Row, Col } from 'antd';
import  Utils  from "../../utils/utils";
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: ' 神 ',
            sysTime: '2019-11-25 19 : 30 :10'
        }
    }

    componentWillMount() {
        this.timer = setInterval(() => {
            let sysTime = Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime:sysTime
            })
        }, 1000);
    }

    componentWillUnmount(){
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    render() {
        return (
            <div className="header">
                <Row className="header_top">
                    {/* 第一行 */}
                    <Col span={24}>
                        <span>欢迎, {this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>

                <Row className="breadcrumb">
                    {/* 第二行 */}
                    <Col span={4} className="breadcrumb_title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather_detail">天气不好呀</span>

                    </Col>
                </Row>
            </div>
        );
    }

}

export default Header