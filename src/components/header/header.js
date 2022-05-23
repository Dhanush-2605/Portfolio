import { Fragment } from "react";
import { MenuOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";
import bootstrap from "bootstrap";
import CodeSharpIcon from "@mui/icons-material/CodeSharp";
import { rgbToHex } from "@mui/material";


// <nav class="navbar navbar-expand-lg  navbar-dark">
// <a class="navbar-brand" href="">Tindog</a>
//  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// <span class="navbar-toggler-icon"></span>
// </button>
// <div class="collapse navbar-collapse" id="navbarSupportedContent">
// <ul class="navbar-nav ms-auto">
//     <li class="nav-item">
//         <a class="nav-link" href="#footer">Contact</a>
//     </li>
//     <li class="nav-item">
//         <a class="nav-link" href="#pricing">Pricing</a>
//     </li>
//     <li class="nav-item">
//         <a class="nav-link" href="#cta">Download</a>
//     </li>
// </ul>
// </div>
// </nav>
const NavBar = () => {
  return (
    <div className={classes.new_nav}>
    <nav class="navbar navbar-expand-lg  navbar-dark navbar_new "   style={{backgroundColor:"gray",display:"flex"}}>
    <a class="navbar-brand" className={classes.brand} href="/"><CodeSharpIcon sx={{ fontSize: "50px" }} /></a>
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse"  id="navbarSupportedContent">
  <div className={classes.links}>
    <ul class="navbar-nav ms-auto">
        <li class="nav-item" style={{color: "red"}}>
            {/* <a class="nav-link" href="#footer">Contact</a> */}
            <NavLink to="/"><a class="nav-link" href="">Home</a></NavLink>
        </li>
        <li class="nav-item">
            {/* <a class="nav-link" href="#pricing">Pricing</a> */}
            <NavLink  to="/projects" >
            <a class="nav-link" >Projects</a>    

            
            </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/contact">
            <a class="nav-link">Contact</a>
        </NavLink>
        </li>
    </ul>
    </div>
 </div>
</nav>
</div>

  
    // <div className={classes.header}>
    //   <nav>
    //     <div className={classes.logo}>
    //       {/* <h1>Dhanush.</h1> */}
    //       
    //     </div>
    //     <ul className={classes.ul_items}>
    //       <li>
    //         
    //       </li>
    //       <li>
    //         <Link to="">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/projects">Projects</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //       <div className={classes.hamburger_menu}>
    //         <MenuOutlined className={classes.menu} />
    //       </div>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default NavBar;
