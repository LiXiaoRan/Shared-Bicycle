/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import menuConfig from '../../config/menuConfig';
import { Menu, Icon } from "antd";
import "./index.less";
import { NavLink } from "react-router-dom";

const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuTreeNode: {}

        }
        this.renderMenu = this.renderMenu.bind(this)
    }

    componentWillMount() {
        let menuTreeNode = this.renderMenu(menuConfig);
        this.setState({
            menuTreeNode
        })
    }

    /**菜单渲染 */
    renderMenu(data) {
        
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                );
            }
            return <Menu.Item title={item.title} key={item.key}>                
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        });
    }

    render() {
        return (
            <div>
                <div className="logo">
                    {/* 这里写成 assets 是因为在外面访问不到public，这是正常写法*/}
                    <img src="assets/logo192.png" alt={'logo'}></img>
                    <h1>🚴‍🚴‍♀️系统</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLeft