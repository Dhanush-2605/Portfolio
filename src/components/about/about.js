import React, { Fragment } from "react";
import classes from "./about.module.css";
import Skills from "../skills/skills";
const About = () => {
  return (
    <Fragment>

      <section id="#about" className={classes.container}>
        <div className={classes.container_inside}>
        <div className={classes.line}>
        {/* <p className="border"/> */}
        <span className={classes.divider}></span>
      </div>
          <div className={classes.title}>
            <h1>About Me</h1>
          </div>
          <div className={classes.content}>
            <div className={classes.detail}>
              <h1>Dhanush</h1>
              <p>
                Hi all,i am student at vellore institute of technology Aspiring
                Software Engineer,Always loves to build things and explore
                latest technologies present i am learning MERN stack
              </p>
            </div>
            <div className={classes.image}>
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60.jpg"
                alt="dhanush"
              ></img>
            </div>
          </div>
        </div>
      </section>

      <Skills />
    </Fragment>
  );
};

export default About;
