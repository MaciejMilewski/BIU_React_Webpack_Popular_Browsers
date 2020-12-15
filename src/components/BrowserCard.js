import React from "react";

export default function BrowserCard({ name, img_url, description }) {
    return (
        <React.Fragment>
            <div className="card" >
                <img  src={img_url} alt="Browser image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </React.Fragment>
    );
}