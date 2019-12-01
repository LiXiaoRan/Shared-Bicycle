import React, { Component } from 'react'
import App from './App';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './admin';
import Login from './pages/login';
import Buttons from "./pages/ui/buttons";
import NoMatch from "./pages/NoMatch";
import Home from './pages/home';
import modals from "./pages/ui/modals";
import Loading from './pages/ui/loading';
import Notification from './pages/ui/notice';
import Message from './pages/ui/message';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from "./pages/ui/carousel";
import FormLogin from './pages/form/login';
import FormReginster from './pages/form/register';
import BasicTable from './pages/table/BasicTable';
import BikeMap from './pages/map/bikeMap';

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
                                        <Route path='/admin/ui/buttons' component={Buttons}></Route>
                                        <Route path='/admin/ui/modals' component={modals}></Route>
                                        <Route path='/admin/ui/loadings' component={Loading}></Route>
                                        <Route path='/admin/ui/notification' component={Notification}></Route>
                                        <Route path='/admin/ui/messages' component={Message}></Route>
                                        <Route path='/admin/ui/tabs' component={Tabs}></Route>
                                        <Route path='/admin/ui/gallery' component={Gallery}></Route>
                                        <Route path='/admin/ui/carousel' component={Carousels}></Route>
                                        <Route path='/admin/form/login' component={FormLogin}></Route>
                                        <Route path='/admin/form/reg' component={FormReginster}></Route>
                                        <Route path='/admin/table/basic' component={BasicTable}></Route>
                                        <Route path='/admin/bikeMap' component={BikeMap}></Route>
                                        
                                        
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
