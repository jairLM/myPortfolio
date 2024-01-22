import React from 'react'
import '../styles/projects.css'

function Projects() {
  return (
    <article className='containerProjects'>
        <section className='projects'>
            <h1 id='projects'>&#60;--Proyectos--&#62;</h1> 
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
                    <img src="../myPortfolio/img/boletinesImg.PNG" className='imgFrame' alt="boletines" />
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

                <section className='containerCardProject'>
                  <a href="https://github.com/jairLM/apiRest-series/tree/main/src/main/java/com/company/backend" target='_blank'>
                    <img src="../myPortfolio/img/capturaBckSeries.PNG" className='imgFrame' alt="boletines" />
                  </a>
                  <h2>//API - Series</h2>
                  <hr />
                  <p>Repositorio de mi primer API acerca de series en Netflix</p>
                  <p>Tecnologías implementadas:</p>
                  <section className='tecList'>
                      <p className='tec tecJava' >JAVA <img src="../myPortfolio/img/java.svg" className='logoTec' alt="java" /></p>
                      <p className='tec tecSpringB'>SPRINGBOOT <img src="../myPortfolio/img/spring-boot.svg" className='logoTec' alt="springboot" /></p>
                      <p className='tec tecMysql'>MYSQL <img src="../myPortfolio/img/mysql.svg" className='logoTec' alt="mysql" /></p>
                      <p className='tec tecGitHub'>GITHUB <i className="bi bi-github iconMain"></i></p>
                      <p className='tec tecPostman'>POSTMAN <img src="../myPortfolio/img/postman.svg" className='logoTec' alt="postman" /></p>
                    </section>
                </section>   

                <section className='containerCardProject'>
                  <a href="https://bitbucket.org/api-rest-node/api-example-songs/src/main/" target='_blank'>
                    <img src="../myPortfolio/img/capturaBitbucket.PNG" className='imgFrame' alt="boletines" />
                  </a>
                  <h2>//API - tracks musicales</h2>
                  <hr />
                  <p>Repositorio de mi API de canciones</p>
                  <p>Tecnologías implementadas:</p>
                  <section className='tecList'>
                      <p className='tec tecNode' >NODEJS <img src="../myPortfolio/img/nodejsblack.svg" className='logoTec' alt="node" /></p>
                      <p className='tec tecMongo'>MONGO <img src="../myPortfolio/img/mongodb.svg" className='logoTec' alt="mongo" /></p>
                      <p className='tec tecBitb'>BITBUCKET <img src="../myPortfolio/img/bitbucket.svg" className='logoTec' alt="bitbucket" /> </p>
                      <p className='tec tecPostman'>POSTMAN <img src="../myPortfolio/img/postman.svg" className='logoTec' alt="postman" /></p>
                    </section>
                </section>                          
                                         
                                                                  
            </div>       
        </section>

    </article>
  )
}

export default Projects