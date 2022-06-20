import { Fragment } from "react";
import { MenuOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
import bootstrap from "bootstrap";
import CodeSharpIcon from "@mui/icons-material/CodeSharp";
import { rgbToHex } from "@mui/material";
import React, { Component } from "react";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wraper}>
        <div className={classes.left}>
          <div className={classes.logo}>
            <a href="/" style={{ color: "#3500d3" }}>
              <CodeSharpIcon sx={{ fontSize: "50px" }} />
            </a>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.link}>
            <NavLink to="/">
              <a class="nav-link" href="#">
                Home
              </a>
            </NavLink>
          </div>
          <div className={classes.link}>
            <NavLink to="/projects">
              <a class="nav-link" href="">
                Projects
              </a>
            </NavLink>
          </div>

          <div className={classes.link}>
            <NavLink to="/contact">
              <a class="nav-link">Contact</a>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
