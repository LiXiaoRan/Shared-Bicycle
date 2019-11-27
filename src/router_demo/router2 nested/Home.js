import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// 分体的hash路由demo
export default class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/main">Main1</Link>
                    </li>
                    <li>
                        <Link to="/about">About1</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topic1</Link>
                    </li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        )
    }
}
