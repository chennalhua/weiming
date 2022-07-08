import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from '../view/HomePage'
import Stop from '../view/Stop'
const AppRoute = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/"><Stop /></Route>
                    <Route exact path="/a"><HomePage /></Route>
                </Switch>
            </Router>
        </>
    )
}
export default AppRoute