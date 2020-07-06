import React, { Fragment, useContext } from 'react'
import "./Home.css"
import { ThemeContext } from "../../../Context/ThemeContext"
import Sidebar from '../../../Components/Sidebar/Sidebar'



export default function Home() {

    const themeContext = useContext(ThemeContext)
    const theme = themeContext.enableDarkMode ? themeContext.dark : themeContext.light


    return (
        <Fragment>
            <div className="Home" style={{backgroundColor:theme.background}}>
                <Sidebar/>

                <div className="DemoData"  style={{backgroundColor:theme.background}}>
                    <div className="Data1" style={{backgroundColor:theme.ui}}>1</div>    
                    <div className="Data2" style={{backgroundColor:theme.ui}}>2</div>    
                    <div className="Data3" style={{backgroundColor:theme.ui}}>3</div>    
                    <div className="Data4" style={{backgroundColor:theme.ui}}>4</div>    
                    <div className="Data5" style={{backgroundColor:theme.ui}}>5</div>    
                </div>
            </div>
        </Fragment>
    )
}
