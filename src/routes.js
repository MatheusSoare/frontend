import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/Main';
import Box from './pages/Box';
import User from './pages/User';
import Login from './pages/Login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/box/:id" component={Box}/>
            <Route path="/users" component={User}/>
            <Route path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;