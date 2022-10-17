import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
            <div className="container">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <i className={icon}></i> {title}
                    </Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="about" className="nav-link">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

//App üzerinden props ile title gelmeme ihtimaline karşın:
Navbar.defaultProps = {
    title: "GitHub Finder",
    icon: "fa-brands fa-github",
};
// Proplara ait tipleri kontrol etmek için, veya gerekli olduğunu bildirmek için kullanılır:
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar;
