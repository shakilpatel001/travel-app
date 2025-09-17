import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="Wanderlust" className="logo" />
            </Link>
            <div className="navbar-nav">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <a className="nav-link" href="#contact">
                    Contact Us
                </a>
            </div>
        </div>
    </nav>)
}