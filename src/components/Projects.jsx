import React from 'react'
import '../styles/projects.css'

function Projects() {
  return (
    <article className='containerProjects'>
        <section className='projects'>
            <h1>&#60;--Projectos--&#62;</h1> 
            <div className="proyectCards">
                <section className='containerCardProject'>
                    <a href="https://bubblebeartapioca.netlify.app/" target='_blank'>
                      <img src="../myPortfolio/img/bubblebear.PNG" className='imgFrame' alt="capturaBB" />
                    </a>
                    <h2>//BubbleBear - Ecommerce</h2>
                    <hr />
                    <p>Plataforma ecommerce de bebidas de tapioca</p>
                    <p>Tecnologías implementadas:</p>
                    <section className='tecList'>
                      <p className='tec tecHtml'>HTML <img src="../myPortfolio/img/html.png" className='logoTec' alt="html" /></p>
                      <p className='tec tecCss' >CSS3 <img src="../myPortfolio/img/css3Logo.png" className='logoTec' alt="css" /></p>
                      <p className='tec tecJs'>JAVASCRIPT <img src="../myPortfolio/img/js.png" className='logoTec' alt="js" /></p>
                    </section>
                
                </section>           
                <section className='containerCardProject'>
                  <a href="https://jairlm.github.io/boletines/" target='_blank'>
                    <img src="/myPortfolio/img/boletinesImg.PNG" className='imgFrame' alt="boletines" />
                  </a>
                  <h2>//Boletines - Landing page</h2>
                  <hr />
                  <p>Pagina estatica de mejores series en Netflix</p>
                  <p>Tecnologías implementadas:</p>
                  <section className='tecList'>
                      <p className='tec tecHtml'>HTML <img src="../myPortfolio/img/html.png" className='logoTec' alt="html" /></p>
                      <p className='tec tecCss' >CSS3 <img src="../myPortfolio/img/css3Logo.png" className='logoTec' alt="css" /></p>
                      <p className='tec tecJs'>JAVASCRIPT <img src="../myPortfolio/img/js.png" className='logoTec' alt="js" /></p>
                    </section>
                </section>                          
                                         
                                                                  
            </div>       
        </section>

    </article>
  )
}

export default Projects