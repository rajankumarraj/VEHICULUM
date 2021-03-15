import React, { useState } from 'react'
import '../../styles/style.css';
import Shapepng from "../../assets/shape@3x.png";
import Vehiculum from "../../assets/vehiculum-logo.png";
import ArrowDown from "../../assets/arrow-down.png";
import { NavLink } from "react-router-dom";



const Header = () => {
    const [setDropDown, setsetDropDownClass] = useState('');

    const myFunction = (event) => {
        var x = document.getElementById("myTopnav");
        console.log(x);
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    const remoVeDropDown = () => {
        console.log('setDropDown', setDropDown);
        if (setDropDown) {
            setsetDropDownClass('')
        }
        else {
            setsetDropDownClass('setDropDown')
        }

    }
    console.log(setDropDown);
    return (
        <div className="topnav" id="myTopnav">
            <NavLink className="active" to="/"><img
                alt="Cover"
                src={Vehiculum}
            /></NavLink>
            <div className="dropdown">
                <button className="dropbtn" onClick={remoVeDropDown}>
                    <img
                        className="custom-style-img1"
                        alt="Cover"
                        src={Shapepng}
                    />MEIN-BEREICH
                    <img
                        className="custom-style-img2"
                        alt="Cover"
                        src={ArrowDown}
                    />
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className={"dropdown-content" + " " + setDropDown}>
                    <a href="#">My-published-jokes</a>
                    <hr />
                    <a href="#">My-saved-jokes</a>
                    <hr />
                    <a href="#">Account-Information </a>
                    <hr />
                    <a href="#">Account-Information </a>
                    <hr />
                    <a href="#">Publish-new-joke</a>

                </div>
            </div>
            <a href="#contact" className="content">SONDERANGEBOTE </a>
            <a href="#news" className="content">SO-FUNKTIONIERTS</a>
            <a style={{ fontSize: "15px" }} onClick={myFunction} className="icon" >&#9776;</a>

        </div>
    )
}

export default Header