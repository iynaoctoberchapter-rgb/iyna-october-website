import React from "react";
import logo from "../../images/brain blitz logo.jpg";

function HeroComponent() {
  return (
    <React.Fragment>
        <br />
        <div className="competition-hero">
            <img src={logo}alt="BrainBlitz logo" />
            <div className="competition-hero-text">
                <h1>BrainBliTz Competiton</h1>
                <p>Brain Blitz is a high school neuroscience competition destined for nurturing youth skills in neuroscience. It grants high school students
                    the opportunity to showcase their talents and enrich their knowledge
                    in neuroscience</p>
            </div>
         </div>
    </React.Fragment>
  );
}

export default HeroComponent;