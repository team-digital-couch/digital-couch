import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Timeline from './components/Timeline/Timeline';
import Journal from './components/Journal/Journal';
import AddJournal from './components/AddJournal/AddJournal';
import Dashboard from './components/Dashboard/Dashboard';
import ProviderNotes from './components/ProviderNotes/ProviderNotes';
import Search from './components/Search/Search'



export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/journal' component={Journal} />
        <Route path='/addJournal' component={AddJournal} />
        <Route path='/notes' component={ProviderNotes}/>
        <Route path='/timeline' component={Timeline} />
        <Route path='/clientinfo/:id' component={Dashboard} />
        <Route path='/search' component={Search} />
    </Switch>
)