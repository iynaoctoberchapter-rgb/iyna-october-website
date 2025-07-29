import { useEffect } from "react";
import { NavLink } from "react-router";
import Logo from "../../images/logo.png";
function HeaderComponent() {
  useEffect(() => {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");
    if (toggle && nav) {
      const handleClick = () => {
        nav.classList.toggle("show-menu");
        toggle.classList.toggle("show-icon");
      };
      toggle.addEventListener("click", handleClick);
      // Cleanup
      return () => toggle.removeEventListener("click", handleClick);
    }
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <NavLink to="/" className="nav__logo">
            <img src={Logo} alt="IYNA Logo" />
          </NavLink>
          <div className="nav__toggle" id="nav-toggle">
            <i className="fa-solid fa-bars nav__burger"></i>
            <i className="fa-solid fa-xmark nav__close"></i>
          </div>
        </div>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li>
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Issues" className="nav__link">
                Issues
              </NavLink>
            </li>
            <li>
              <NavLink to="/Program" className="nav__link">
                Program
              </NavLink>
            </li>
            <li>
              <NavLink to="/BrainBliTz" className="nav__link">
                BrainBliTz
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="nav__link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/Publish" className="nav__link">
                Publish
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;