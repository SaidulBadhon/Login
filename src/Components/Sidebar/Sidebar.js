import React, {useContext} from "react";

import { Button, IconButton } from "@material-ui/core";
import "./Sidebar.css";
import { AuthContext } from "../../Context/AuthContext"

import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import MessageRoundedIcon from "@material-ui/icons/MessageRounded";
import LocalOfferRoundedIcon from "@material-ui/icons/LocalOfferRounded";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


export default function Sidebar() {
    const authContext = useContext(AuthContext)
    const ToggleAuth = authContext.ToggleAuth

    return (
      <div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        {/*this.state.pageNotFound ? (
          <div className="SideBar"></div>
        ) : (*/}
        <div className="SideBar">
          <div className="SideBarButtons">
            <Button
              className="ButtonClass"
              onClick={() => {
                window.location.href = "#/";
              }}
            >
              &nbsp;
              <DashboardRoundedIcon style={{ color: "rgba(40, 40, 40, .9)" }} />
              &nbsp; Dashboard
            </Button>
            <Button
              onClick={() => {
                window.location.href = "#/users";
              }}
            >
              &nbsp;
              <AccountBoxRoundedIcon
                style={{ color: "rgba(40, 40, 40, .9)" }}
              />
              &nbsp; User
            </Button>
            <Button
              onClick={() => {
                window.location.href = "#/posts";
              }}
            >
              &nbsp;
              <PostAddRoundedIcon style={{ color: "rgba(40, 40, 40, .9)" }} />
              &nbsp; Posts
            </Button>
            <Button>
              &nbsp;
              <MessageRoundedIcon style={{ color: "rgba(40, 40, 40, .9)" }} />
              &nbsp; Comments
            </Button>

            <Button>
              &nbsp;
              <LocalOfferRoundedIcon
                style={{ color: "rgba(40, 40, 40, .9)" }}
              />
              &nbsp; Tags
            </Button>

            <Button
              style={{ top: "29.5%" }}
              onClick={() => {
                window.location.href = "#/dashsakjsadhgjkl";
              }}
            >
              &nbsp;
              <SettingsIcon style={{ color: "rgba(40, 40, 40, .9)" }} />
              &nbsp; Settings
            </Button>

            <Button
              style={{ top: "29.5%" }}
              onClick={()=> {ToggleAuth()}}
            >
              &nbsp;
              <ExitToAppIcon style={{ color: "rgba(40, 40, 40, .9)" }} />
              &nbsp; Logout
            </Button>
          </div>
        </div>
        {/*)*/}
      </div>
    );
  }
