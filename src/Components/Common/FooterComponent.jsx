import { NavLink } from "react-router";

function FooterComponent() {
  return (
    <footer>
      <h2>IYNA October Chapter</h2>
      <div className="sitemap">
         <NavLink to="/">Home |</NavLink>
         <NavLink to="/Issues">Issues |</NavLink>
         <NavLink to="/Program">Program |</NavLink>
         <NavLink to="/BrainBliTz">BrainBliTz |</NavLink>
         <NavLink to="/Contact">Contact |</NavLink>
         <NavLink to="/Publish">Publish</NavLink>
      </div>
      <div className="footer-devided">
        <div className="footer-left">
          <h3>About the chapter</h3>
          <p>Passionate young neuroscientists are dedicated to aiding the next generation in understanding neuroscience through events, websites, sessions, and research papers.</p>
         </div>

         <div className="footer-right">
           <div className="footer-links">
               <a className="contact">
                 <i className="fa-solid fa-map-location"></i>
                 6<sup>th</sup> of October - Giza, Egypt
               </a>
               <a href="tel:+201102432367" className="contact">
                 <i className="fa-solid fa-phone-volume"></i>
                 +201102432367
               </a>
               <a href="mailto:iynaoctchapter@gmail.com" className="contact">
                 <i className="fa-solid fa-envelopes-bulk"></i>
                 iynaoctoberchapter@gmail.com
               </a>
           </div>
           <div className="footer-social-icons">
             <a href="https://www.facebook.com/iynaoctoberchapter?mibextid=kFxxJD">
               <div className="icon">
                  <i className="fa-brands fa-facebook"></i>
                </div>
             </a>
             <a href="https://www.instagram.com/iyna.october?igsh=MWZkY3UzamZrOW5xZQ==">
               <div className="icon">
                  <i className="fa-brands fa-instagram"></i>
                </div>
             </a>
             <a href="https://www.linkedin.com/company/iyna-october-chapter/">
               <div className="icon">
                  <i className="fa-brands fa-linkedin"></i>
                </div>
             </a>
           </div>
         </div>     
            </div>
      <div className="developers">
         <p><strong>Web manager:</strong> <a>Eyad Ashraf</a> | <strong>UI-Designer:</strong> Abdelrahman</p>
      </div>
   </footer>
  );
}

export default FooterComponent;