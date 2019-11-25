/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import menuConfig from '../../config/menuConfig';
import { Menu, Icon} from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class NavLeft extends Component {
    render() {
        return (
            <div>
                <div className="logo">
                    {/* 这里写成 assets 是因为在外面访问不到public，这是正常写法*/}
                    <img src="assets/logo192.png" alt={'logo'}></img>
                    <h1>🚴‍♀️管理系统</h1>
                </div>
                <Menu>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>   
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default NavLeft