import React, { Component } from "react";
import { Card, message, Icon, Tabs } from "antd";
import "./ui.less";

const { TabPane } = Tabs;
export default class Tab extends Component {
    newTabIndex=0;

    constructor(props) {
        super(props);
        this.state = {
            panes: [
                {
                    title: 'tab1',
                    content: 'tab1 content',
                    key: '1',
                },
                {
                    title: 'tab2',
                    content: 'tab2 content',
                    key: '2',
                },
                {
                    title: 'tab3',
                    content: 'tab3 content',
                    key: '3',
                },
            ],
            activeKey: '1'
        }
    }


    handleCallback(key) {

        message.info(`您选择了${key}标签`);
        // this.setState({
        //     activeKey:key
        // })
    }

    // onChange=(activeKey)=>{
    //     this.setState({
    //         activeKey
    //     })
    // }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };


    render() {
        return (
            <div>
                <Card title="Tab页面标签" className="card_wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback.bind(this)}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3" disabled>
                            Content of Tab Pane 3
                         </TabPane>
                    </Tabs>
                </Card>

                <Card title="带图的Tab页面标签" className="card_wrap">
                    <Tabs defaultActiveKey="2" onChange={this.handleCallback.bind(this)}>
                        <TabPane tab={<span><Icon type="plus" /> tab1 </span>} key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab={<span><Icon type="edit" /> tab2 </span>} key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab={<span><Icon type="delete" /> tab3 </span>} key="3">
                            Content of Tab Pane 3
                         </TabPane>
                    </Tabs>
                </Card>

                <Card title="动态Tab页面标签" className="card_wrap">
                    <Tabs defaultActiveKey="1"
                        onChange={this.handleCallback.bind(this)}
                        // onChange={this.onChange}
                        // activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                        hideAdd={false}
                    >
                        {/* 这里别忘了写Tabs，刚才就是忘写了，然后不现实，改了好长时间bug */}
                        {
                            this.state.panes.map((pane) => {
                                return <TabPane tab={pane.title} key={pane.key}>
                                    {pane.content}
                                </TabPane>
                            })
                        }
                    </Tabs>
                </Card>


            </div>
        );
    }
}
