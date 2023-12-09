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
                <img src="./src/img/html.png" alt="react" />
            </div>
            <div className="skill">
                <img src="./src/img/css3Logo.png" alt="react" />
            </div>
            <div className="skill">
                <img src="./src/img/js.png" alt="react" />
            </div>
            <div className="skill">
                <img src="./src/img/bootstrap.svg" alt="react" />
            </div>
            <div className="skill">
                <img src="./src/img/react.svg" alt="react" />
            </div>
            <div className="skill">
                <img src="./src/img/spring.svg" alt="react" />
            </div>
            <div className="skill">
                <img src="./src/img/mysql.svg" alt="react" />
            </div>

        </section>


    </section>
    
    </>
  )
}
export default Skills;
