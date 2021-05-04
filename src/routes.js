import React from 'react';
import { Route } from 'react-router';


import App from './App';
import User from "./user";

export default (
    <Route path="/" component={App}>
        <Route path="/user" component={User} />
    </Route>
);