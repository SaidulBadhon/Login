import React, { Fragment,useContext, useState } from 'react'
import "./Login.css"

import { ThemeContext } from "../../../Context/ThemeContext"
import { AuthContext } from "../../../Context/AuthContext"


import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { TextField, Button, IconButton } from "@material-ui/core";

import {useSpring, animated} from 'react-spring'

export default function Login() {

  const authContext = useContext(AuthContext)
  const ToggleAuth = authContext.ToggleAuth



    const themeContext = useContext(ThemeContext)
    const theme = themeContext.enableDarkMode ? themeContext.dark : themeContext.light
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [gotoSignUpPage, setGotoSignUpPage] = useState(false);
  
    // const opacityProps = useSpring({opacity: 1, from: {opacity: 0}})
    const opacityProps = useSpring({opacity: !gotoSignUpPage ? 1 : 0})
    const opacityProps2 = useSpring({opacity: gotoSignUpPage ? 1 : 0})


    const submit = e => {
        e.preventDefault();
        console.log("Authenticating User...")
      };

      
    return (
      <div className="Login" style={{backgroundColor: theme.background}}>
        <div className="Container" id="container">

          <div className="LeftSide">
            <h1 style={{color:theme.textColor}}>Login </h1>
            
            <div className="SocialLinks">

              <IconButton>
                <FacebookIcon  style={{color:"#3B5998", fontSize:"30px"}} />
              </IconButton>

              <IconButton>
                <TwitterIcon style={{color:"#00ACEE", fontSize:"30px"}} />
              </IconButton> 

              <IconButton>
                <LinkedInIcon style={{color:"#0E76A8", fontSize:"30px"}} />
              </IconButton>

            </div>

            <h5 style={{color:theme.textColor2, margin:0, padding:0, marginTop:10}}>Or login in with Email...</h5>

            <div style={{marginBottom:"40px"}}/>

            <div className="InputSection">


            <TextField className="Email" id="Email" label="Email" variant="outlined" fullWidth autoComplete="email" />
            
            <div style={{marginBottom:"20px"}}/>
            <TextField className="Password" id="Password" label="Password" type="password" variant="outlined" fullWidth autoComplete="password" />

            <h5 className="ForgotPassword" style={{color:theme.textColor2, margin:0, padding:0, marginTop:10}}><span>Forgot password ?</span></h5>

            <div style={{marginBottom:"35px"}}/>

            <div className="SubmitButton" style={{backgroundColor:theme.buttonColor}}>
              <Button fullWidth style={{height:"100%" , color:theme.buttonTextColor, fontSize:16}} onClick={()=> {ToggleAuth()}}>
                LogIn
              </Button>
            </div>

            </div>


          </div>

  

          <div className={"RightSide"}>
            <h1 style={{color:theme.textColor}}>SignUp</h1>
            
            <div className="InputSection">

              <div className="FirstAndLastName">

                <TextField className="FirstName" id="FirstName" label="First Name" variant="outlined" autoComplete="firstName" />

                <TextField className="LastName" id="LastName" label="Last Name" variant="outlined" autoComplete="lastName" />

              </div>


              <div style={{marginBottom:"20px"}}/>

              <TextField className="Email" id="Email" label="Email" variant="outlined" fullWidth autoComplete="email" />
              
              <div style={{marginBottom:"20px"}}/>
              <TextField className="Password" id="Password" label="Password" type="password" variant="outlined" fullWidth autoComplete="password" />

              <div style={{marginBottom:"10px"}}/>

              <h5 style={{color:theme.textColor2, margin:0, padding:0, marginBottom: 10, justifyContent: "center", alignItems:"center", fontWeight:500, }}>I accept all of the Terms & Conditions</h5>


              <div className="SubmitButton" style={{backgroundColor:theme.buttonColor}}>
                <Button fullWidth style={{height:"100%" , color:theme.buttonTextColor, fontSize:16}}>
                  SignUp
                </Button>
              </div>

            </div>

            <div className="SocialLinks">
              <h5 style={{color:theme.textColor2, margin:0, padding:0, marginTop:15}}>Or signin in with Email...</h5>
              
              <div style={{marginBottom:"10px"}}/>

              <IconButton>
                <FacebookIcon  style={{color:"#3B5998", fontSize:"30px"}} />
              </IconButton>

              <IconButton>

                <TwitterIcon style={{color:"#00ACEE", fontSize:"30px"}} />
              </IconButton> 

              <IconButton>
                <LinkedInIcon style={{color:"#0E76A8", fontSize:"30px"}} />
              </IconButton>
            </div>

          </div>



          <div className={gotoSignUpPage ? "SliderAnim" : "Slider"}>
            
            {!gotoSignUpPage ? (
              <animated.div className="SliderContinar" style={opacityProps}>
                <div className="Greetings">
                  <h1 style={{color: theme.buttonTextColor}} >Welcome back!</h1>
                </div>
                
                <div className="DontHaveAnAccountContinar" style={{color:theme.buttonTextColor}}>
                  <div className="DontHaveAnAccount">
                  <h4>Don't have an Account ?</h4>
                  <h5>Let's get you all set up so you can start doing your first work.</h5>
                  
                  
                  <div className="SubmitButton" >
                    <Button fullWidth style={{ backgroundColor:theme.ui, height:"100%" , color:theme.textColor, fontSize:16}} onClick={()=> setGotoSignUpPage(!gotoSignUpPage)}>SingUp</Button>
                  </div>


                  <div style={{marginBottom:"30px"}}/>
                </div>
                </div>
              </animated.div>
            )
            :
            (
              <animated.div className="SliderContinar" style={opacityProps2}>
                <div className="DontHaveAnAccountContinar" style={{color:theme.buttonTextColor, position:"relative", display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                  <div className="DontHaveAnAccount">
                  <h4>Already Signed up?</h4>
                  <h5>Log in to your account so you can continue...</h5>
                  
                  
                  <div className="SubmitButton" >
                    <Button fullWidth style={{ backgroundColor:theme.ui, height:"100%" , color:theme.textColor, fontSize:16}} onClick={()=> setGotoSignUpPage(!gotoSignUpPage)}>Login</Button>
                  </div>


                  <div style={{marginBottom:"30px"}}/>
                  </div>
                </div>
              </animated.div>
            )}
          </div>
        </div>
      </div>
  
    )
}
