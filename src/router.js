import { Switch, Route ,  BrowserRouter as Router,} from 'react-router-dom';
import React from 'react';

import App from './App.js';
import Dashboard from './dashboard.js'

const AppRouter  = () => {
    return <Router>
        <div>
        <Switch> 
            <Route exact path='/' component = {App} />
            <Route path = '/dashboard' component = {Dashboard} />
        </Switch>
        </div>
        
    </Router>
}

export default AppRouter;