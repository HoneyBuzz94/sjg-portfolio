import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} className="navbar-item" to="/">
          About Me
        </Link>,
        <Link key={2} className="navbar-item" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="navbar-item" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="navbar-item" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
