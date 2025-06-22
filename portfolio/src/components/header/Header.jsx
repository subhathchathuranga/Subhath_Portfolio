import React, { useState } from 'react'
import "./header.css";

const Header = () => {
const [Toggle,ShowMenu] = useState(false);
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className="nav__logo">Subhath</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                            <i className="bxr  bx-home-alt nav__icon"></i>Home
                        </a>
                    </li>
                

               
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="bxr  bx-user-circle nav__icon"></i>About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className="bxr  bx-file nav__icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="bxr  bx-briefcase nav__icon"></i>Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className="bxr  bx-mountain-view nav__icon"></i>Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="bxr  bx-message-circle-dots nav__icon"></i>Contact
                        </a>
                    </li>
                </ul>
                < i className='bxr  bx-x nav__close'  onClick={()=>ShowMenu(!Toggle)}></i> 
            </div>
            <div className="nav__toggle" onClick={()=>ShowMenu(!Toggle)}>
                < i className='bxr  bx-apps'  ></i> 
            </div>
        </nav>
    </header>
  )
}

export default Header