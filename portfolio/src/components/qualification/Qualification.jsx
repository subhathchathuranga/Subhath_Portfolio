import React, { useState } from 'react'
import "./Qualification.css"

const Qualification = () => {
    const [toggleState,setToggleState] = useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index);
        }
  return (
    <section className="qualification section">

        <h2 className="section__title">Qualification</h2>
        <span className="section_subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=> toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icon"></i>Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}  onClick={()=> toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BITC(Hons) 3.11GPA</h3>
                            <span className="qualification__subtitle">university of Vavuniya</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2020-2025
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Intern Full-stack Web Developer</h3>
                            <span className="qualification__subtitle">Fuchsius(PVT) LTD</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2024(6 months)
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">GCE A Level(Technology Stream)</h3>
                            <span className="qualification__subtitle">Anamaduwa Central Collage</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2018
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Shop Assistant</h3>
                            <span className="qualification__subtitle">LH Communication & Bookshop</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2018 - 2019
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BITC(Hons) 3.11GPA</h3>
                            <span className="qualification__subtitle">university of Vavuniya</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2020-2025
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Intern Full-stack Web Developer</h3>
                            <span className="qualification__subtitle">Fuchsius(PVT) LTD</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2024(6 months)
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">GCE A Level(Technology Stream)</h3>
                            <span className="qualification__subtitle">Anamaduwa Central Collage</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2018
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Shop Assistant</h3>
                            <span className="qualification__subtitle">LH Communication & Bookshop</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>2018 - 2019
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification