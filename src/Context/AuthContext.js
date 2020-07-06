import React, { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false,

        userImage: null,
        fastName: "Loading...",
        lastName: "Loading...",
        userName: "Loading...",
        email: "Loading...",
        number: "Loading...",
        bloodGroup: "Loading...",
        birthday: "Loading...",

        /*fastName: "Saidul2",
        lastName: "Badhon2",
        userName: "SaidulBadhon2",
        email: "SaidulBadhon2@gmail.com",
        number: "01620861542",
        gender: "O+",
        birthday: "Nov 04, 1999",*/

    }
    ToggleAuth = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated })
    }

    AdjustBalance = (ammount) => {
        this.setState({ balance: this.state.balance + ammount })
    }

    LoadUserData = (fastName, lastName, userName, email, number, gender, birthday, balance) => {
        this.setState({ fastName })
        this.setState({ lastName })
        this.setState({ userName })
        this.setState({ email })
        this.setState({ number })
        this.setState({ gender })
        this.setState({ birthday })
    }

    RemoveUserData = () => {
        this.setState({ fastName: "Loading..." })
        this.setState({ lastName: "Loading..." })
        this.setState({ userName: "Loading..." })
        this.setState({ email: "Loading..." })
        this.setState({ number: "Loading..." })
        this.setState({ gender: "Loading..." })
        this.setState({ birthday: "Loading..." })
        this.setState({ balance: "Loading..." })
    }

    render() {
        return (
            <AuthContext.Provider value={{
                ...this.state,
                ToggleAuth: this.ToggleAuth,
                LoadUserData: this.LoadUserData,
                RemoveUserData: this.RemoveUserData,
                AdjustBalance: this.AdjustBalance
            }}>
                {this.props.children}
            </AuthContext.Provider >
        )
    }
}

export default AuthContextProvider;
