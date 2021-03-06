import React, { Component } from 'react'
import { Card, Row, Col, Modal } from 'antd';
import './ui.less';


const { Meta } = Card;

export default class gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: [
                ['1.png', '2.png', '3.png', '4.png', '5.png'],
                ['6.png', '7.png', '8.png', '9.png', '10.png'],
                ['11.png', '12.png', '13.png', '14.png', '15.png'],
                ['16.png', '17.png', '18.png', '19.png', '20.png'],
                ['21.png', '22.png', '23.png', '24.png', '25.png']
            ],
            modalVisible:false
        }
    }

    componentWillMount() {
        // this.initImesArray();

    }

    initImesArray() {
        let arr = [...Array(25).keys()];

        arr = arr.map((item) => {
            return (item + 1) + ".png"
        })

        this.setState({
            imgs: arr
        });
    }

    openGallery=(imgSrc)=>{
        if (imgSrc) {
            this.setState({
                currentImg:'/gallery/' +imgSrc,
                modalVisible:true
            })
        }
    }

    render() {
        // const imgList=this.state.imgs.map((item,i)=>{
        //     return (<Card key={i}
        //         cover={<img alt="出错了" src={"/gallery/"+item}/>}
        //     >
        //         <Meta title="react" description="img description" />
        //     </Card>)
        // })
        const imgList = this.state.imgs.map((list) => list.map((imgSrc, i) => {
            return <Card key={i}
                style={{ marginBottom: 10 }}
                cover={<img src={'/gallery/' + imgSrc} onClick={() => this.openGallery(imgSrc)} alt="" />}>
                <Card.Meta title="React Admin" description="66 Elena gallery"/>
            </Card>
        }))

        return (
            <div className="card_wrap">
                <Row gutter={10}>
                   <Col md={5}>
                       {imgList[0]}
                   </Col>
                   <Col md={5}>
                       {imgList[1]}
                   </Col> 
                   <Col md={5}>
                       {imgList[2]}
                   </Col> 
                   <Col md={5}>
                       {imgList[3]}
                   </Col> 
                   <Col md={4}>
                       {imgList[4]}
                   </Col>  
                </Row>
                <Modal title="高清大图" className="img_modal" visible={this.state.modalVisible} onCancel={()=>{this.setState({modalVisible:false})}}
                  footer={null}
                >
                    <img src={this.state.currentImg} alt=""></img>
                </Modal>
            </div>
        )
    }
}
