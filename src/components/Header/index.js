import React, { Component } from 'react'
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
        this.getWeatherAPIData=this.getWeatherAPIData.bind(this);
    }

    componentWillMount() {
        this.timer = setInterval(() => {
            let sysTime = Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime:sysTime
            })
        }, 1000);
        this.getWeatherAPIData();
    }

    componentWillUnmount(){
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    /** 获取天气数据 */
    getWeatherAPIData(){
        // 没有找到稳定可用的天气api
        // let city=encodeURIComponent("北京")
        // axios.jsonp({
        //     // url: `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=E4805d16520de693a3fe707cdc962045`
        //     url:'http://t.weather.sojson.com/api/weather/city/101030100'
        // }).then((res) => {
        //     if(res.status === 'success'){
        //         // let data = res.result[0].weather_data[0];
        //         // this.setState({
        //         //     dayPictureUrl:data.dayPictureUrl,
        //         //     weather:data.weather
        //         // })
        //         // console.log('success ',data);
        //     } 
        // })
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
                        {/* <span className="weather_detail">天气不好呀</span> */}
                        {/* <iframe title="weather_detail" className="weather_detail" scrolling="no" src="https://tianqiapi.com/api.php?style=ta&skin=pitaya"  width="250px"  allowtransparency="true"></iframe> */}
                        <iframe title="weather_detail" className="weather_detail" scrolling="no" fontSize={11} src="https://tianqiapi.com/api.php?style=tc&skin=pitaya"   allowtransparency="true" ></iframe>

                    </Col>
                </Row>
            </div>
        );
    }

}

export default Header