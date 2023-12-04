import React from "react";
import '../styles/footer.css'

export const Footer = () => {
  return (
    <footer className="footerContainer">

      <section className="row p-0">
        <div className="col-md-6 containerInfo">
            <div className="info">
              <h1>LUIS JAIR LOPEZ MURILLO</h1>  
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid at ratione ducimus ea molestias quibusdam eum voluptate aut optio!</p>
            </div>
          
        </div>  

        <div className="col-md-6 containerSocial">
          <div className="row titleSocial">
            <h1>SOCIAL</h1>
          </div>
          
          <div className="row social">

            <ul className="socialList">
              <li className="liSocial">
                <a href="https://www.linkedin.com/in/luis-jair-lopez-murillo-44b3341b9/" target="_blanck">
                  <i className="bi bi-linkedin icon"></i>
                </a>
              </li>
              <li className="liSocial">
                <a href="https://github.com/jairLM" target="_blanck">
                  <i className="bi bi-github icon"></i>
                </a>
              </li>
            </ul>

          </div>
          
          </div>

        
      </section>

    </footer>
  );
};
export default Footer
