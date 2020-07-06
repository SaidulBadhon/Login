import React from 'react'

import ThemeContextProvider from "./Context/ThemeContext"
import AuthContextProvider from "./Context/AuthContext"

import App from './App'

export default function ContextLoader() {
    return (
        <ThemeContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider >
        </ThemeContextProvider >
    )
}
