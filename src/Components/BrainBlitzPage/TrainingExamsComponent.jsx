import { NavLink } from "react-router-dom";

function TrainingExamsComponent() {
  return (
    <section className="training-exams">
      <div className="title">
        <hr />
        <h2>Training Exams</h2>
        <hr />
      </div>
    <p className="section-description">Practice with our comprehensive exam simulations to test your knowledge and prepare for the real challenge.</p>
    
    <div className="exam-cards-container">
        <div className="exam-card">
            <div className="exam-header">
                <h3>Basic Knowledge Exam</h3>
                <div className="badges">
                  <div className="questions-count">30 Questions</div>
                  <div className="level">Begginer</div>
                </div>
            </div>
            <div className="exam-content">
                <p>Test your fundamental understanding of key concepts with this beginner-level exam.</p>
                <NavLink to="/BrainBliTz/training/First-exam" className="start-exam-btn">Start Exam</NavLink>
            </div>
        </div>
        
        <div className="exam-card">
            <div className="exam-header">
                <h3>Intermediate Challenge</h3>
                <div className="badges">
                  <div className="questions-count">40 Questions</div>
                  <div className="level">intermediate</div>
                </div>
            </div>
            <div className="exam-content">
                <p>Push your knowledge further with this intermediate-level assessment.</p>
                <a className="start-exam-btn disabled">Not open yet</a>
            </div>
        </div>
        
        <div className="exam-card">
            <div className="exam-header">
                <h3>Advanced Mastery Test</h3>
                <div className="badges">
                  <div className="questions-count">50 Questions</div>
                  <div className="level">Advanced</div>
                </div>
            </div>
            <div className="exam-content">
                <p>Challenge yourself with our most difficult questions for advanced learners.</p>
                <a className="start-exam-btn disabled">Not open yet</a>
            </div>
        </div>
    </div>
</section>
  );
}

export default TrainingExamsComponent;