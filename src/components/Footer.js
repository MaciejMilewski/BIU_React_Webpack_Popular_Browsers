import React from "react";

export default function Footer({ name }) {
    return (
        <React.Fragment>
            <footer className="page-footer font-small blue pt-4">
                <div className="footer-copyright text-center py-3">Copyright by {name}.</div>
            </footer>
        </React.Fragment>
    );
}