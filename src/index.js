import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Switch,
    Route, BrowserRouter
} from 'react-router-dom';
import User from "./user";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/user/">
                <User />
            </Route>
            <Route path="/" render={()=><App/>}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
