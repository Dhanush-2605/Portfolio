import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import ProjectDetails from "./ProjectData";
import classes from "./projects.module.css";

const Projects = () => {
  return (
    <Fragment>
      <section className={classes.project_body}>
        <header className={classes.heading}>
          <div className={classes.heading_div}>
            <h1>My Work</h1>
          </div>
        </header>
        <section className={classes.project_container}>
          <div className={classes.card_container}>
            {ProjectDetails.map((data) => {
              return (
                <Card className={classes.card_div} style={{ width: "18rem" }}>
                  <div className={classes.image}>
                    <img src={data.image} alt=""></img>
                  </div>

                  <Card.Body>
                    <Card.Title className={classes.title}>
                      {data.title}
                    </Card.Title>
                    <div className={classes.content}>
                      <Card.Text>{data.content}</Card.Text>
                    </div>
                    <div className={classes.button}>
                      {/* <div> */}
                      <button size="sm" variant="primary">
                        <a href={data.liveWebsite}>Live Website</a>
                      </button>
                      {/* </div> */}
                      {/* <div> */}
                      <button size="sm" variant="success">
                        <a href={data.gitHub}>Source Code</a>
                      </button>
                      {/* </div>  */}
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default Projects;
