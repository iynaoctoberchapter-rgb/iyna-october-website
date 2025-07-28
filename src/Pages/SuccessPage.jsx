import { NavLink } from "react-router-dom";

function SuccessPage() {
  return (
    <div className="action-page">
      <h2>Thank you for your submission!</h2>
      <p>We have received your paper and will review it soon.</p>
      <NavLink to="/">
        Back to Home
       </NavLink>
    </div>
  );
}

export default SuccessPage;