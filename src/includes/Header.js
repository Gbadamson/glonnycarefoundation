import "./Styles.css";
import logo from "./images/translogo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <header>
        <img src={logo} alt="Logo" height="100" />
        <span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Abouts</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
          <li>
            <a href="/pay" className="link-button">
              Donate
            </a>
          </li>
        </span>
      </header>

      <h1>Lorem Ispum</h1>
      <h2>
        Lorem Ispum, vex lake turn five make un una max rull dan dell well bell
        don't take una{" "}
      </h2>
      <div className="head-butts">
        <a href="#" className="link-button">
          Foundation
        </a>
        <a href="#" className="link-button link-green">
          Network
        </a>
      </div>
    </div>
  );
}

export default Header;
