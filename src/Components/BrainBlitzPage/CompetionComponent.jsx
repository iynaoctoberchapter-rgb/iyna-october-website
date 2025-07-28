import logo from "../../images/brain blitz logo.jpg";

function CompetitionComponent() {
  return (
      <div className="competition">
            <div className="competition-txt">
               <h2>BrainBliTz is live now!</h2>
               <p>Be a part of Brain Blitz and participate to win awards, you will
                receive practice tests once you fill in the registration form
                </p>
                  <a href="#">Register Now <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <div className="competition-img">
               <img src={logo} alt="BrainBliTz Logo" />
            </div>
         </div>
  );
}

export default CompetitionComponent;