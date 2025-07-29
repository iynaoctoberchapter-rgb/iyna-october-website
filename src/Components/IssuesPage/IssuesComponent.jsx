import { useEffect } from "react";

function IssuesComponent() {
  useEffect(() => {
    const buttons = document.querySelectorAll('.questions-container .question button');
    const handlers = [];

    buttons.forEach(button => {
      const handleClick = () => {
        const faq = button.nextElementSibling;
        const icon = button.children[1];
        if (faq) faq.classList.toggle('show');
        if (icon) icon.classList.toggle('rotate');
      };
      button.addEventListener('click', handleClick);
      handlers.push({ button, handleClick });
    });

    // Cleanup: remove all listeners
    return () => {
      handlers.forEach(({ button, handleClick }) => {
        button.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <section className="body">
      <div className="body-content has-hero">
        <div className="hero-section">
          <h1>Issues</h1>
          <h3>Discover the latest Issues</h3>
          <p>
            Explore key topics, challenges, and recent developments shaping the field of neuroscience
          </p>
        </div>
        <section className="section">
          <div className="title">
            <hr />  
            <h2>Latest Volumes</h2>
            <hr />
          </div>
          <div className="questions-container">
            <div className="question">
              <button type="button">
                <span>Volume #1</span>
                <i className="fas fa-chevron-down d-arrow"></i>
              </button>
              <div className="content">
                <a href="issues-view/issue-1/">
                  <div className="issue">
                    <h3>Issue #1</h3>
                    <div className="issue-content">
                      <div className="img"></div>
                      <div className="issue-text">
                        <h4>IYNA Oct. Branch</h4>
                        <h5>November 2022</h5>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default IssuesComponent;