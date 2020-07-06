import React from 'react'
import "./Header.css"

import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded"

import {IconButton} from "@material-ui/core"

export default function Header() {
    return (
        <div className="Header">
            <h2>Site Name</h2>

          <div className="HeaderUserInfo">
            <IconButton className="SearchIconButton">
              <SearchRoundedIcon />
            </IconButton>

            <IconButton className="NotificationsIconButton">
              <NotificationsRoundedIcon />
            </IconButton>

            <div className="HeaderUserDitels">
              <h5>Saidul Badon</h5>
              <h6>Available</h6>
            </div>

            <div className="Logo">
              {/* <img src={logo} alt="Settings Logo" /> */}
              <h3>S</h3>
            </div>
          </div>


        </div>
    )
}
