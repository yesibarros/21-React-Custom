import * as React from "react";
import { Link, useLocation } from "react-router-dom";

const NavButton = ({ nav }) => {
  const location = useLocation();
  const link = `/${nav.toLowerCase()}`;

  return (
    <Link to={link}>
      <div
        className={`navigation-buttons ${
          location.pathname === link ? "active" : ""
        }`}
      >
        <p>{nav}</p>
      </div>
    </Link>
  );
};

export default function Header() {
  const buttons = ["Timer", "Countdown"];
  return (
    <header>
      <img src="/react-logo.png" alt="react logo" />
      <nav>
        {buttons.map((nav) => (
          <NavButton nav={nav} key={nav} />
        ))}
      </nav>
    </header>
  );
}
