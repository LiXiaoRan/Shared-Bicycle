import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Topic from '../router1/Topic';
import Main from '../router1/Main';
import About from '../router1/About';
import Home from './Home';
//分体路由
export default class Irouter extends Component {
    render() {
        return (
            <Router>
                <Home>
                    <Route exact={true} path="/" component={Main}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>

        )
    }
}
