import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import ProjectDetails from "./ProjectData";
import classes from "./projects.module.css";

const Projects = () => {
  return (
    <Fragment>
      <div
        className={classes.title}
        data-aos="fade-right"
        data-aos-duration="1000"
        fade-aos-delay="100"
      >
        <h1>My Work</h1>
      </div>
      <div className={classes.container}>
        <div
          className={classes.wrapper}
          data-aos="zoom-in"
          data-aos-duration="1000"
          fade-aos-delay="100"
        >
          {ProjectDetails.map((data) => {
            return (
              <div className={classes.flip_card}>
                <div className={classes.flip_card_inner}>
                  <div className={classes.flip_card_front}>
                    <div
                      data-aos="zoom-in"
                      data-aos-delay="100"
                      data-aos-duration="1000"
                    >
                      {" "}
                      <h1>{data.title}</h1>
                    </div>

                    <div className={classes.image}>
                      <img src={data.image} alt="Avatar" />
                    </div>
                  </div>

                  <div className={classes.flip_card_back}>
                    <p>{data.content}</p>
                    <div>
                      <button>
                        <a href={data.liveWebsite}>Live Website</a>
                      </button>
                      <button>
                        <a href={data.gitHub}>Source Code</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
