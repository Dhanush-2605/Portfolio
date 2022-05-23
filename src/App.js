import React from "react";
import Contact from "./components/contact/contact";
import { Fragment } from "react";
import NavBar from "./components/header/header";
import Details from "./components/details/Details";
import Projects from "./components/projects/projects";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/layout";
import Bottom from "./components/Bottom/bottom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
function App() {
  return (
    // <Fragment>
    // <div>
    //   <NavBar />
    // </div>

    //     <div class="app" >
    <Fragment>
    <div className="app">
    
    
    {/* <FontAwesomeIcon icon="fas fa-image" /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Details />} />

          <Route exact path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/about" element={<About/>} /> */}
        </Routes>
      </Layout>
    </div>

  </Fragment>
    );
}

export default App;
{
  /* <Projects /> */
}

{
  /* <div> */
}
