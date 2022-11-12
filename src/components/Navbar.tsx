import React, { useState, useEffect } from "react";
import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar() {
    const [isMenuClicked, setMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const menuClicked = () => {
        setMenu(!isMenuClicked);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        if (window.innerWidth > 520) {
            setMenu(false);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return (
        <nav>
            <p className="nav-title">Nicolas Mazieres</p>
            {(isMenuClicked || largeur > 520) && (
                <ul className="nav-list">
                    <li className="nav-items">Home</li>
                    <li className="nav-items">About Me</li>
                    <li className="nav-items">Projects</li>
                    <li className="nav-items">Contact</li>
                </ul>)
            }
            <button className="nav-button" onClick={menuClicked}><GiHamburgerMenu /></button>
        </nav>
    );
}

export default Navbar;