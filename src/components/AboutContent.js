import "./AboutContentStyle.css";
import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assests/react1.jpg";
import React2 from "../assests/react2.png";


const AboutContent = () => {
    return (
        <div className="about">
            <div className="left"><h1>Who I am
            </h1>
                <p>Hi! I am KUMARI SAKSHI ,Currently pursuing BTech from Noida Institute of Engineering and Technology Greater Noida in CSE with specialisation in Data Science.<br/><br/>
                Skills: Python , JavaScript, Reactjs, Html, Css, machine learning.
                </p>
                
                <Link to="/contact">
                    <button className="btn">Contact</button></Link></div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div></div>



        </div>
    )
}

export default AboutContent;