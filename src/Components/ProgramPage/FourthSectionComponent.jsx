import React from "react";

function FourthSectionComponent() {
  return (
    <React.Fragment>
        <div className="program-fourth-section">
            <div className="title">
                <hr />
                <h2>Program timeline</h2>
                <hr />
            </div>
            <div className="main">
                <div className="timeline-container">
                    <ul>
                        <li>
                            <h3 className="heading">Registration opens</h3>
                            <span className="date">July 18, 2025</span>
                            <span className="circle"></span>
                        </li>
                        <li>
                            <h3 className="heading">Registration closes</h3>
                            <span className="date">August 6, 2025</span>
                            <span className="circle"></span>
                        </li>
                        <li>
                            <h3 className="heading">Decisions Are out</h3>
                            <span className="date">August 10, 2025</span>
                            <span className="circle"></span>
                        </li>
                        <li>
                            <h3 className="heading">Program starts</h3>
                            <span className="date">August 12, 2025</span>
                            <span className="circle"></span>
                        </li>
                        <li>
                            <h3 className="heading">Program ends</h3>
                            <span className="date">Septemper 22, 2025</span>
                            <span className="circle"></span>
                        </li>
                    </ul>
                </div>
            </div>
         </div>
    </React.Fragment>
  );
}

export default FourthSectionComponent;