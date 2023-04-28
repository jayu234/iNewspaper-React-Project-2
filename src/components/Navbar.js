import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
    let location = useLocation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><strong>iNewspaper</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-dark">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="btn btn-dark dropdown-toggle nav-link" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category : {props.category}
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link className={`dropdown-item ${location.pathname === "/business" ? "active" : ""}`} aria-current="page" to="/business">Business</Link></li>
                                    <li><Link className={`dropdown-item ${location.pathname === "/entertainment" ? "active" : ""}`} aria-current="page" to="/entertainment">Entertainment</Link></li>
                                    <li><Link className={`dropdown-item ${(location.pathname === "/general") || (location.pathname === "/") ? "active" : ""}`} aria-current="page" to="/general">General</Link></li>
                                    <li><Link className={`dropdown-item ${(location.pathname === "/health") ? "active" : ""}`} aria-current="page" to="/health">Health</Link></li>
                                    <li><Link className={`dropdown-item ${location.pathname === "/science" ? "active" : ""}`} aria-current="page" to="/science">Science</Link></li>
                                    <li><Link className={`dropdown-item ${location.pathname === "/sports" ? "active" : ""}`} aria-current="page" to="/sports">Sports</Link></li>
                                    <li><Link className={`dropdown-item ${location.pathname === "/technology" ? "active" : ""}`} aria-current="page" to="/technology">Technology</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}