import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import home from './pages/home';
import ofanat from './pages/orfanatos';

function Routes() {
    return (
    <BrowserRouter>
        <Route path="/" component={home} exact/>
        <Route path="/orfanatos" component={ofanat} />
    </BrowserRouter>
    );
    
}

export default Routes;