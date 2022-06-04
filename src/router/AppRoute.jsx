import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from '../view/HomePage'
const AppRoute = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/"><HomePage /></Route>
                </Switch>
            </Router>
        </>
    )
}
export default AppRoute