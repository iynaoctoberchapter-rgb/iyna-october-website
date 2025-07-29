import { NavLink } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="action-page">
      <h1>404</h1>
      <h2>Not Found!</h2>
      <p>We 're sorry, but the page you are looking for may be changed or deleted, if the issue persists Don't hesitate reaching us</p>
      <NavLink to="/">
        Back to Home
       </NavLink>
    </div>
  );
}

export default NotFoundPage;