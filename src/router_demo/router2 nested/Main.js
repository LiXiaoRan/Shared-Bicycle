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
                        <Link to="/main/a">Main1 -> a</Link>

                    </li>
                    <li>
                        <Link to="/main/t">Main1 -> t</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
