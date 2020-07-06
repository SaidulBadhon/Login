import React, {useState, useContext } from "react";



import {AuthContext} from "./Context/AuthContext"


import MainNavigation from "./Navigation/MainNavigation"
import RootNavigation from "./Navigation/RootNavigation"

function App() {

  const [isLoading, setIsLoading] = useState(false);

  const [isAuthenticationReady, setIsAuthenticationReady] = useState(true);

  const authContext = useContext(AuthContext)
  const isAuthenticated = authContext.isAuthenticated
  
  if (isAuthenticationReady && !isLoading) {

    if (isAuthenticated === true) {
      return (
        <MainNavigation />
      )
    } else {
      return (
        <RootNavigation />
      )
    }
  } 
  else {
    return (
          <div>
            Loading...
          </div>
    )
  }

}

export default App;
