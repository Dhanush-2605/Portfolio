import React, { Fragment } from "react";
import classes from "./skills.module.css";

const Skills = () => {
  return (
    <Fragment>
      <div className={classes.line}>
        {/* <p className="border"/> */}
        <span className={classes.divider}></span>
      </div>

      <section className={classes.section}>
        <div className={classes.container}>
          <div className={classes.text}>
            <h1>My Skills</h1>
          </div>
          <div className={classes.image}>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png"
                alt="Html"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png"
                alt="Css"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"
                alt="javascript"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png"
                alt="React"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png"
                alt="nodejs"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png"
                alt="mongodb"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png"
                alt="git"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"
                alt="java"
              ></img>
            </div>
            <div data-aos-duration="1000" data-aos="zoom-in">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"
                alt="python"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Skills;
