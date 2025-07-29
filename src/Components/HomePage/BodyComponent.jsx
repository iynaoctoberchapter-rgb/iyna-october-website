import { NavLink } from "react-router";
import brainBlitzLogo from '../../images/brain blitz logo.jpg'; // Import the image

function BodyComponent() {
  return (
   <section className="body">
      <div className="body-content">
         <div className="row">
            <div className="left">
               <h2>Who We Are</h2>
               <p>We are a group of young neuroscientists who are passionately
                  dedicated to help the next generation of neuroscientists,
                  hoping to achieve a better understanding of neuroscience
                  through our events, websites, sessions, and research papers.</p>
            </div>
            <div className="right">
               <h2>Our Vision</h2>
               <div>
                  <p>We aim to make a new generation of young
                  neuroscientist as follows:</p> <br />
                  <div className="vision-li">
                     <i className="fa-solid fa-brain"></i><p>Well rounded about neuroscience and
                        wrote issues about it.
                     </p>
                  </div>
                  <div className="vision-li">
                     <i className="fa-solid fa-brain"></i><p>Well prepared for international competitions
                        such as BB.
                     </p>
                  </div>
                  <div className="vision-li">
                     <i className="fa-solid fa-brain"></i><p>Well known about the career and jobs that
                        are available with a neuroscience BS degree.                        
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <hr className="separate" />
         <div className="row">
            <div className="left right-second">
               <h2>Issues</h2>
               <p>Explore our collection of neuroscience issues, each crafted by passionate students and reviewed by experts. Dive into articles that cover the latest discoveries, fundamental concepts, and real-world applications in neuroscience. Whether you're a beginner or an enthusiast, our issues are designed to inspire curiosity and deepen your understanding of the brain.</p>
               <NavLink to="/Issues">Browse Issues <i className="fa-solid fa-arrow-up-right-from-square"></i></NavLink>
            </div>
            <div className="right left-second">
               <h2>Program</h2>
               <p>
                  Join our immersive neuroscience program designed for high school students and enthusiasts. Over six weeks, you'll learn about brain structure, neural communication, and neurological disorders through interactive sessions and mentorship. This program is perfect for those preparing for competitions or simply eager to expand their knowledge.
               </p>
               <NavLink to="/Program">Join Program <i className="fa-solid fa-arrow-up-right-from-square"></i></NavLink>
            </div>
         </div>
         <hr className="separate" />
            <div className="competition">
               <div className="competition-txt">
                  <h2>Brain BliTz Competition</h2>
                  <p>Brain Blitz is a high school neuroscience competition destined 
                     for nurturing youth skills in neuroscience</p>
                     <NavLink to="/BrainBliTz">Register Now <i className="fa-solid fa-arrow-up-right-from-square"></i></NavLink>
               </div>
               <div className="competition-img">
                  <img src={brainBlitzLogo} alt="BrainBliTz Logo" />
               </div>
            </div>
            <hr className="separate" />
            <div className="row">
               <div className="left left-second">
                  <h2>Publication</h2>
                  <p>Share your research, reviews, or essays with a vibrant community of young neuroscientists. Our publication platform welcomes original work that demonstrates curiosity, creativity, and scientific rigor. Selected submissions will be featured to inspire and inform others passionate about brain science.</p>
                  <NavLink to="/Publish">Publish your work <i className="fa-solid fa-arrow-up-right-from-square"></i></NavLink>
               </div>
               <div className="right right-second" style={{border: "none"}}>
                  <h2>Contact Us</h2>
                  <p>
                     Have questions, suggestions, or want to collaborate? Reach out to our team for more information about our programs, publications, or events. We're here to support your journey in neuroscience and look forward to connecting with you.
                  </p>
                  <NavLink to="/Contact">Get in touch <i className="fa-solid fa-arrow-up-right-from-square"></i></NavLink>
               </div>
            </div>
            <hr className="separate" />
            <div className="row">
               <div className="right left-last">
                 <h2>Our Team in numbers</h2>
                 <div className="statistics">
                   <div className="statistic-card">
                     <h3>10+</h3>
                     <p>Published Papers</p>
                   </div>
                   <div className="statistic-card">
                     <h3>4+</h3>
                     <p>Years of Experience</p>
                   </div>
                   <div className="statistic-card">
                     <h3>20+</h3>
                     <p>Awards Won</p>
                   </div>
                   <div className="statistic-card">
                     <h3>#1</h3>
                     <p>Global Rank</p>
                   </div>
                 </div>
               </div>
            </div>
      </div>
   </section>
  );
}

export default BodyComponent;