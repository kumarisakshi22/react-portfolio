import "./Heroimagestyles.css";
import React from 'react'
import IntroImg from "../assests/bg3.png";
import { Link } from "react-router-dom";
const Heroimage = () => {
    return (

        <div className="hero">

            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg" />

            </div>
            <div className="content">
                <div className="pic">
                    <img src="https://media.licdn.com/dms/image/D4D03AQF2pUI7jYIlxQ/profile-displayphoto-shrink_400_400/0/1685249179888?e=1693440000&v=beta&t=ov_SjCc8KGsdVtTh9mTMkxPDxq-i0l0ZygyCWyJQ2Xw" alt="mypic" /></div>
                <p>KUMARI SAKSHI</p>
                <h1>React Developer</h1>
                <div className="page">
                    <Link to="/project" className="btn">Projects
                    </Link>
                    <Link to="/contact" className="btn btn-light">Contact
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default Heroimage
