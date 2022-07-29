import React, { Fragment } from "react";
import classes from "./details.module.css";
import About from "../about/about";
// import {Button} from "@mui/material";
// import Typed from "react-typed";
import Typed from "typed.js";


import { useEffect,useRef} from "react";

import { Button } from "react-bootstrap";
import Skills from "../skills/skills";
const Details = () => {
  const text=["Dhanush","a web developer","exploring web3"]


    // Create Ref element.
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Dhanush","a MERN Stack Developer","exploring web3"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop:true
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);
  return (
    <Fragment>
      <section className={classes.main_section}>
        <div className={classes.detail}>
          <div
            className={classes.text_div}
          >
         

              <h1 className={classes.big_text}>I'm <span style={{color:"#FAFA33"}} ref={el}></span> </h1>
   
           
          

             {/* <h1 className={classes.big_text}>Dhanush</h1> */}
               {/* <span style={{color:"white"}} ref={el}></span>     */}

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
                <img src="" alt="resume" />
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
