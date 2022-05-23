import React, { Fragment } from "react";
import classes from "./about.module.css";
import Skills from "../skills/skills";
const About = () => {
  return (
    <Fragment>
    <section className={classes.container}>
    <div className={classes.container_inside} >
      <div className={classes.detail}>

        <h1>Dhanush</h1>
        <p>Hi all,i am student at vellore institute of tecnology</p>
      </div>
      <div className={classes.image}>
        <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60.jpg" alt="dhanush"></img>
      </div>
      </div>
    </section>

    <Skills />
    </Fragment>
  );
};

export default About;