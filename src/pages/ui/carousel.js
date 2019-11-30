import React, { Component } from "react";
import { Card, Carousel } from "antd";
import "./ui.less";
export class carousels extends Component {
    render() {
        return (
            <div>
                <Card title="文字背景轮播" className="card_wrap">
                    <Carousel autoplay>
                        <div>
                            <h3>轮播图 必须 1</h3>
                        </div>
                        <div>
                            <h3>轮播图 设置 2</h3>
                        </div>
                        <div>
                            <h3>轮播图 样式 3</h3>
                        </div>
                    </Carousel>
                </Card>

                <Card title="图片背景轮播" className="card_wrap">
                    <Carousel autoplay>
                        <div>
                            <h3>轮播图 必须 1</h3>
                        </div>
                        <div>
                            <h3>轮播图 设置 2</h3>
                        </div>
                        <div>
                            <h3>轮播图 样式 3</h3>
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}

export default carousels;
