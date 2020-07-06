import React, { Fragment, useContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Login from "../Pages/RootNavigation/Login/Login"
import PageNotFound from"../Pages/PageNotFound/PageNotFound"

import Header from "../Components/Header/Header"
import Footer from "../Components/Footer"

export default function RootNavigation() {
    return (
        <Fragment>
        <Router>
            {/* <Header/> */}
  
            <Switch>
                <Route exact path="/" component={() => <Login/>} />
    
                <Route exact path="/404" component={() => <PageNotFound ErrorType={"404"} />}/>
                <Redirect to="/404" />
  
            </Switch>
  
            {/* <Footer />       */}
          </Router>
      </Fragment>
    )
}
