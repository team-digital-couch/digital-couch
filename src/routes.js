import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from './components/Register';


export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/journal' component={Journal} />
        <Route path='/timeline' component={Timeline} />
        <Route path='/clientinfo/:id' component={Dashboard} />
    </Switch>
)