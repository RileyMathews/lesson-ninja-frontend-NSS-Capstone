import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Register from './auth-views/Register';
import Login from './auth-views/Login';

/*
    module: application views
    author: riley mathews
    purpose: to handle routing for the application
*/

class ApplicationViews extends Component {


    render() {
        return (
            <React.Fragment>
                <Route exact path="/"/>
                <Route exact path="/profile" />
                <Route exact path="/students" />
                <Route exact path="/lessons" />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </React.Fragment>
        )
    }
}

export default ApplicationViews