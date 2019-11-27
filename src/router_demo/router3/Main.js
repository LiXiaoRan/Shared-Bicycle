import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Main extends Component {
    render() {
        return (
            <div>
                this is  Main
               <hr />
                <ul>
                    <li>
                        <Link to="/main/test-id"> 嵌套路由1</Link>

                    </li>
                    <li>
                        <Link to="/main/456">嵌套路由2</Link>
                    </li>
                    {/* <li>
                        <Link to="/main/t">嵌套路由3</Link>
                    </li> */}
                </ul>
                <hr/>
                {this.props.children}
            </div>
        )
    }
}
