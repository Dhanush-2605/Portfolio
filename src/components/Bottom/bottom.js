import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import classes from "./Bottom.module.css"
// import { } from "@fortawesome/free-solid-svg-icons"

// // GrTwitter
// import {FontAwesomeIcon} from "@fortawesome/fontawesome-free";
// import { FontAwesomeIcon } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const Bottom = () => {
  const date = new Date();
  console.log(date.getFullYear);

  return (
    <footer className={classes.sticky_footer}>
    <div className={classes.connect}>
    <div>
      <a href="https://www.linkedin.com/in/dhanush-vellasiri-9a495021b/">
        <LinkedInIcon style={{fontSize:"40px"}} />
        
      </a>
      <a href="https://github.com/Dhanush-2605">
        <GitHubIcon style={{fontSize:"40px"}} />
      </a>

      <a href="https://www.instagram.com/dhanush.vellasiri/">
   
        <InstagramIcon style={{fontSize:"40px"}} />
      </a>
      </div>
      <p>&copy;Dhanush {date.getFullYear()}</p>
      </div>
    </footer>
  );
};
export default Bottom;

