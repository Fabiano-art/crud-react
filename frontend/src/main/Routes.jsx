import React from "react"
import {Switch, Route, Redirect} from "react-router"

import Home from "../components/Home/Home"
import UserCrud from "../components/Users/UserCrud"

export default function route(props){
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={UserCrud}/>
            <Redirect from="*" to="/"/>
        </Switch>
    )
    
}