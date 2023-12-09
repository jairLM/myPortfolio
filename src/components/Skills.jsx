import React from 'react'
import '../styles/skills.css'

export const Skills = () => {
  return (
    <>
    
    <section className='containerSkills'>
        <section className='titleSkills'>
            <h1 id='skills'>&#60;--Skills--&#62;</h1>
        </section>
        <section className='sectionSkills'>
            <div className="skill">
                <img src="../myPortfolio/img/html.png" alt="react" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/css3Logo.png" alt="react" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/js.png" alt="react" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/bootstrap.svg" alt="react" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/react.svg" alt="react" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/spring.svg" alt="react" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/mysql.svg" alt="react" />
            </div>

        </section>


    </section>
    
    </>
  )
}
export default Skills;
