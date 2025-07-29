import heroImg from '../../images/hero-img.jpg';
import { NavLink } from "react-router";

function HeroComponent() {
  return ( 
    <section className="hero">
      <div className="left-txt">
         <h1>Discover The future <br />of neuroscience</h1>
         <p>We aim to make a new generation of young neuroscientist</p>
         <div className="links">
            <NavLink className="first-link" to="/Issues">Browse Issues</NavLink>
            <NavLink className="second-link" to="/Program">Explore Program</NavLink>
         </div>
      </div>
      <div className="right-img">
         <img src={heroImg} alt="IYNA Oct. Highboard" />
         <div className="img-content">
            <p>IYNA Oct. Highboard</p>
            <a href="">Read more</a>
         </div>
      </div>
   </section>
  );
}

export default HeroComponent;