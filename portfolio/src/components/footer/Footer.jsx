import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Subhath</h1>

        <ul className="footer__list">
          <li><a href="#about" className="footer__link"></a></li>

          <li><a href="#portfolio" className="footer__link">Projects</a></li>

          <li><a href="#testimonials" className="footer__link">Testimonials</a></li>
        </ul>

        <div className="footer__social">
                  <a href="#insta" className="footer__social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
        </a>

        <a href="#" className="footer__social-link" target="_blank">
            <i class="bx bxl-instagram"></i>
        </a>

        <a href="#" className="footer__social-link" target="_blank">
            <i class="bx bxl-linkedin"></i>
        </a>
        </div>
        <span className="footer__copy">&#169; Subhath Chathuranga. All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer