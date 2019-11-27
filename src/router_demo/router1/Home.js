import React, { Component } from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import Topic from './Topic';
import Main from './Main';
import About from './About';

// 混合组件化的hash路由demo
export default class Home extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <ul>
                            <li>
                                <Link to="/">Main</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/topics">Topic</Link>
                            </li>
                        </ul>
                        <hr />
                        {/* 这里如果没有exact，输入about的时候，也会显示main的内容. */}
                        {/* <Route exact={true} path="/" component={Main}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route> */}
                        {/* 另一种写法，Switch */}
                        <Switch>
                            <Route exact={true} path="/" component={Main}></Route>
                            <Route path="/about" component={About}></Route>
                            <Route path="/topics" component={Topic}></Route> 
                        </Switch>

                        
                    </div>
                </HashRouter>
            </div>
        )
    }
}
