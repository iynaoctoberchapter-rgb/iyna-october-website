import React from "react";

function FirstSectionComponent() {
  return (
    <React.Fragment>
        <div className="program-first-section">
            <div className="title">
                <hr />
                <h2>About the Program</h2>
                <hr />
            </div>
            <p className="section-heading">The IYNA October Chapter Neuroscience Program is a six-week immersive learning experience that introduces students to the fundamental principles of neuroscience. <br /><br />Throughout the program, participants explore key topics such as brain structure, neural communication, sensory and motor systems, and neurological disorders. Each week builds upon the last, offering a step-by-step understanding of how the nervous system works.</p>
            <div className="program-first-section-content">
                <h3>Why Participate?</h3>
                <p>The Program offers introductions and detailed explanations of different
                    neuroscience concepts for all students and neuroscience enthusiasts.
                    The program also offers mentorship for the Brain Blitz competition.</p>
                <div className="cards">
                    <div className="card">
                        <h4>Neural Signaling</h4>
                    </div>
                    <div className="card">
                        <h4>Sensation</h4>
                    </div>
                    <div className="card">
                        <h4>Movement</h4>
                    </div>
                    <div className="card">
                        <h4>Brain Development</h4>
                    </div>
                    <div className="card">
                        <h4>Cognitive
                            Neuroscience</h4>
                    </div>
                    <div className="card">
                        <h4>Neuropathology</h4>
                    </div>
                </div>
            </div>
         </div>
    </React.Fragment>
  );
}

export default FirstSectionComponent;