import React from 'react'
import '../styles/main.css'

function Main() {
  return (
    <main className='containerMain'>
        <section className='row containerRow'>
            <div className="col-md-6 col-xl-5  containerImg">
                <img src="/src/img/LuisJair.png" className='imgJair' alt="Jair" />
            </div>
            <div className="col-md-6 col-xl-7  containerInfo">            
                <div className='ownInfo'>
                    <h1>Hi, I'm Jair!</h1>
                    <h2>Desarrollador Java Full Stack</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim labore necessitatibus facilis amet officiis suscipit in dolorum. Possimus, provident. Illum, tempora neque ex, nisi velit iste est, exercitationem corrupti quod nihil quia. Velit natus officia asperiores ratione unde dicta vitae nobis quaerat facilis tenetur, error ut magni enim, libero sapiente?</p>
                    <ul className='containerIcons'>
                        <li className='elementIcon'>
                            <a href="https://www.linkedin.com/in/luis-jair-lopez-murillo-44b3341b9/" target="_blanck">
                                <i className="bi bi-linkedin iconMain"></i>
                            </a>
                        </li>
                        <li className='elementIcon'>
                            <a href="https://github.com/jairLM" target="_blanck">
                                <i className="bi bi-github iconMain"></i>
                            </a>
                        </li>
                        <button className='btnDl'>
                            <a  href="/src/docs/resumeLuisJairLopezMurillo.pdf" download={"resume.pdf"} className='aBtn'>Get resume</a>
                        </button>
                    </ul>
                    
                </div>
            </div>
        </section>
    </main>
  )
}

export default Main