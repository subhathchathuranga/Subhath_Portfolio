import React from 'react'
import "./Work.css"
import Works from './Works'

const work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title">Portfolio</h2>
        <span className="section_subtitle">Most recent works</span>
        <Works/>
    </section>
  )
}

export default work