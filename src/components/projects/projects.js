import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import ProjectDetails from "./ProjectData";
import classes from "./projects.module.css";

const Projects = () => {
  return (
    <Fragment>
      <div className={classes.title}>
        <h1>My Work</h1>
      </div>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          {ProjectDetails.map((data) => {
            return (
              <div className={classes.flip_card}>
                <div className={classes.flip_card_inner}>
                  <div className={classes.flip_card_front}>
                    <img src={data.image} alt="Avatar" />
                  </div>

                  <div className={classes.flip_card_back}>
                    <h1>{data.title}</h1>
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
