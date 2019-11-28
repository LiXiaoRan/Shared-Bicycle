import React, { Component } from 'react'
import App from './App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './admin';
import Login from './pages/login';
import Buttons from "./pages/ui/buttons";
import NoMatch from "./pages/NoMatch";
import Home from './pages/home';
export default class IRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <App>
                        <Switch>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/admin" render={() =>
                                <Admin>
                                    <Switch>
                                        {/* <Home /> */}
                                    <Route  path='/admin/ui/buttons' component={Buttons}></Route>
                                    <Route component={NoMatch}></Route>
                                    </Switch>
                                    
                                </Admin>
                            }></Route>
                            <Route path="/order/detail" component={Admin}></Route>
                            {/* <Route component={NoMatch}></Route> */}
                        </Switch>
                    </App>
                </Router>
            </div>
        )
    }
}
