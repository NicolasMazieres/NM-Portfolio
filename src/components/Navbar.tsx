import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const {t} = useTranslation();
    const [isMenuClicked, setMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const menuClicked = () => {
        setMenu(!isMenuClicked);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        if (window.innerWidth > 800) {
            setMenu(false);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, [])

    return (
        <nav>
            <p className="nav-title">Nicolas Mazières</p>
            {(isMenuClicked || largeur > 800) && (
                <ul className="nav-list">
                    <li className="nav-items">
                        <HashLink className="nav-link" smooth to="/#" onClick={menuClicked}>{t('navbarItems.home')}</HashLink>
                    </li>
                    <li className="nav-items">
                        <HashLink className="nav-link" smooth to="/#about" onClick={menuClicked}>{t('navbarItems.about')}</HashLink>
                    </li>
                    <li className="nav-items">
                        <HashLink className="nav-link" smooth to="/#projects" onClick={menuClicked}>{t('navbarItems.projects')}</HashLink>
                    </li>
                    <li className="nav-items">
                        <HashLink className="nav-link" smooth to="/#contact" onClick={menuClicked}>{t('navbarItems.contact')}</HashLink>
                    </li>
                </ul>)
            }
            <button className="nav-button" onClick={menuClicked}><GiHamburgerMenu /></button>
        </nav>
    );
}

export default Navbar;