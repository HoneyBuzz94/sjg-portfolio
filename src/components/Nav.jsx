import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  return (
    <Navbar
      link={[
        <Link key={1} className="" to="/">
          Home
        </Link>,
        <Link key={2} className="" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={2} className="" to="/contact">
          Contact
        </Link>,
        <Link key={2} className="" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}
