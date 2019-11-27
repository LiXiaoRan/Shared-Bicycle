import React, { Component } from 'react'
import { HashRouter, Route, Link ,Switch} from 'react-router-dom'
import Topic from './Topic';
import Main from './Main';
import About from './About';


export default class Home extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topic</Link>
                            </li>
                        </ul>
                        <hr/>
                        <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                    </div>
                </HashRouter>
            </div>
        )
    }
}
