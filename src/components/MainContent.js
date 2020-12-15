import React from "react";
import Title from "./Title";
import BrowserCard from "./BrowserCard";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

export default function MainContant({ browsers }) {
    return (
        <React.Fragment>
            <NavigationBar/>
            <Title description="Popular Web Browsers"/>
            <div className="card" >
                <ul className="list-group list-group-flush">
                    {browsers.map((browser, i) => (
                    <BrowserCard key={i} {...browser} />
                    ))}
                </ul>
            </div>
            <Footer name="BIU student"/>
        </React.Fragment>
    );
}