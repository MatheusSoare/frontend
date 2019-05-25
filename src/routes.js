import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from './pages/Main';
import Box from './pages/Box';
import User from './pages/User';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/box/:id" component={Box}/>
            <Route path="/users" component={User}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;