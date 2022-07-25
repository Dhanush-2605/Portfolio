import React, { Fragment } from "react";
import classes from "./details.module.css";
import About from "../about/about";
// import {Button} from "@mui/material";

import { Button } from "react-bootstrap";
import Skills from "../skills/skills";
const Details = () => {
  return (
    <Fragment>
      <section className={classes.main_section}>
        <div className={classes.detail}>
          <div
            className={classes.text_div}
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <h1 className={classes.h1}>HELLO MY NAME IS</h1>
            <h1 className={classes.big_text}>Dhanush</h1>
            <p>
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of typ
            </p>
            <Button style={{ backgroundColor: "#3500D3" }} size="sm">
              <a
                href="#about"
                style={{ textDecoration: "none", color: "white" }}
              >
                About Me
              </a>
            </Button>
          </div>
          <div
            className={classes.image}
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img
              src="https://images.unsplash.com/photo-1545665277-5937489579f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="dhanush"
            />
          </div>
        </div>
      </section>

      <About />
    </Fragment>
  );
};

export default Details;
