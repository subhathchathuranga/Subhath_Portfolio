import React, { useState } from 'react'
import "./header.css";
import LOGO from "../../assets/logo.png"
const Header = () => {
    window.addEventListener("scroll",function (){
        const header = document.querySelector(".header")
        if (this.scrollY>= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")

    })
const [Toggle,ShowMenu] = useState(false);
const [activeNav, setActiveNav] = useState("#home")
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className="nav__logo"> <img src={LOGO} alt="" className="nav__logo-img" /> Subhath</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={()=>setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="bxr  bx-home-alt nav__icon"></i>Home
                        </a>
                    </li>
                

               
                    <li className="nav__item">
                        <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="bxr  bx-user-circle nav__icon"></i>About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={()=>setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="bxr  bx-file nav__icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                            <i className="bxr  bx-briefcase nav__icon"></i>Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                            <i className="bxr  bx-mountain-view nav__icon"></i>Projects
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
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