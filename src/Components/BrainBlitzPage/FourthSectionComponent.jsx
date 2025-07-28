import { NavLink } from "react-router-dom";

function FourthSectionComponent() {
  return (
      <div className="brain-fourth-section">
            <div className="title">
                <hr />
                <h2>Covered Concepts</h2>
                <hr />
            </div>
            <p className="section-description">Brain Blitz is focused on 6 key neuroscience areas:</p>
            <div className="cards">
                <div className="card">
                    <h4>Neuropathology</h4>
                </div>
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
            </div>
            <h3>Check the Syllabus for more details about the covered topics</h3>
            <NavLink to="/BrainBliTz/Syllabus">Check Syllabus <i className="fa-solid fa-arrow-up-right-from-square"></i></NavLink>
         </div>
  );
}

export default FourthSectionComponent;