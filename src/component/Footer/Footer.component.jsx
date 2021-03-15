
import React from 'react'
import Footerjpg from "../../assets/bitmap_2.jpg";
import Pathpng from "../../assets/path.png";

import '../../styles/style.css';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-left">GOT JOKES GET? PAID</p><br /> <p className="footer-left"> FOR SUBMITTING</p>
            <a>SUBMIT JOKE</a>
            <img
                alt="Footer"
                src={Footerjpg}
            />
            <img className="path"
                alt="Path"
                src={Pathpng}
            />
        </div>
    )
}

export default Footer