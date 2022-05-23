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
                <Card.Img
                  // variant="top"
                  src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60.jpg"
                />
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <div className={classes.content}>
                    <Card.Text>{data.content}</Card.Text>
                  </div>
                  <div className={classes.button}>
                  {/* <div> */}
                    <Button size="sm" variant="primary">
                      <a href={data.liveWebsite}>Live Website</a>
                    </Button>
                  {/* </div> */}
                  {/* <div> */}
                    <Button size="sm" variant="success">
                      <a href={data.gitHub}>Source Code</a>
                    </Button>
                  {/* </div> */}
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
