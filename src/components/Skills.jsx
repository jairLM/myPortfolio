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
                <img src="../myPortfolio/img/html.png" alt="htmlLogo" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/css3Logo.png" alt="cssLogo" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/js.png" alt="jsLogo" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/java.svg" alt="javaLogo" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/bootstrap.svg" alt="bootstrapLogo" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/react.svg" alt="reactLogo" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/spring.svg" alt="springLogo" />
            </div>
            <div className="skill">
                <img src="../myPortfolio/img/mysql.svg" alt="sqlLogo" />
            </div>

        </section>


    </section>
    
    </>
  )
}
export default Skills;
