import React, { Component } from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Topic from '../router1/Topic';
import Main from './Main';
import About from '../router1/About';
import Home from './Home';
//嵌套路由demo
export default class Irouter extends Component {
    render() {
        return (
            <Router>
                <Home>
                    {/* 要注意这里没有使用精准匹配，外层加了精准匹配，内层就无法满足了，内层子节点可以加精准匹配 */}
                    <Route  path="/main" render={()=>
                        // 嵌套route  注意箭头函数后面没有大括号
                        <Main>
                            这是一个嵌套路由的内部节点
                            <Route path="/main/a" component={About}></Route>
                            <Route  path="/main/t" component={Topic}></Route>
                        </Main>
                    }></Route>
                    <Route  path="/about" component={About}></Route>
                    <Route  path="/topics" component={Topic}></Route>
                </Home>
            </Router>

        )
    }
}
