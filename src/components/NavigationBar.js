import React from "react";

export default function NavigationBar() {
    return (
        <nav className="navbar navbar-light bg-light">
             <a className="navbar-brand" href="#">Home</a>
             <a className="navbar-brand" href="#">About</a>
             <a className="navbar-brand" href="#">Contact</a>
             <a className="navbar-brand" href="#">License</a>
        </nav>
    );
}