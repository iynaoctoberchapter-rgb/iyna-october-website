import React from "react";

function FirstSectionComponent() {
  return (
    <React.Fragment>
        <div className="brain-first-section">
            <div className="participants brain-card">
               <div className="title">
                <hr />
                <h2>Who Can Participate?</h2>
                <hr />
               </div>
               <ul>
                <li>Students Enrolled in educational grades 9 12 (and their
                    equivalent) in the 2024 2025 academic year, gap year
                    students are eligible to participate.
                </li>
                <hr />
                <li>Students from around the world are eligible to participate,
                    with no restrictions regarding the student s nationality.
                </li>
                <hr />
                <li>
                    There are no fees associated with joining the competition.
                </li>
               </ul>
            </div>
            
         </div>
    </React.Fragment>
  );
}

export default FirstSectionComponent;