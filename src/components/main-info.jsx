import React from 'react'
import '../styles/main.css'

function Main() {
  return (
    <main className='containerMain'>
        <section className='row containerRow'>
            <div className="col-md-6 col-xl-5  containerImg">
                <img src="../myPortfolio/img/LuisJair.png" className='imgJair' alt="Jair" />
            </div>
            <div className="col-md-6 col-xl-7  containerInfo">            
                <div className='ownInfo'>
                    <h1>Hola, Soy Jair!</h1>
                    <h2>Desarrollador Java Full Stack</h2>
                    <p>Ingeniero Mecánico, egresado y titulado del Instituto Politécnico Nacional. Amplio 
                        interés en la rama de la tecnología. Apasionado por el desarrollo de web, así como 
                        por la realización de pruebas y resolución de problemas.</p>
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
                            <a  href="#" download={"resume.pdf"} className='aBtn' target='_blank'>Descargar CV</a>
                        </button>
                    </ul>
                    <section className='codewarsImg'>
                        <img src="https://www.codewars.com/users/jairLM/badges/large" alt="codewars" />
                    </section>
                    
                </div>
            </div>
        </section>
    </main>
  )
}

export default Main