import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        enableDarkMode: false,
        light: {
            textColor: "#222",
            textColor2: "#444",

            buttonColor: "#2441ff",
            buttonTextColor: "#fff",
            ui: "#ffffff",
            background: "#efeff9",
        },

        dark: {
            textColor: "#ececec",
            textColor2: "#f2a365",

            buttonColor: "#2441ff",
            buttonTextColor: "#fff",
            ui: "#30475e",
            background: "#222831"
        },

        smallPage: false
    }

    ToggleDarkMode = (mode) => {
        this.setState({ enableDarkMode: mode })
    }

    ToggleSmallPage = (mode) => {
        this.setState({ smallPage: mode })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, ToggleDarkMode: this.ToggleDarkMode, ToggleSmallPage: this.ToggleSmallPage }}>
                {this.props.children}
            </ThemeContext.Provider >
        )
    }
}

export default ThemeContextProvider;
