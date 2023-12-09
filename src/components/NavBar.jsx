import React from 'react'
import { useRef } from 'react'
import '../styles/nav.css'





function NavBar() {

    const navRef = useRef();

    const showNavOpt = () =>{
        navRef.current.classList.toggle("responsiveNav");
        navRef.current.classList.toggle("containerOptionsNav");
    }


  return (
    <nav  className="navContainer">

        <div className="row-md-6  bandgeeOptions">
            <div  className="col-md-4  containerBadge">
                <h1 className='badgee blue'>&#40;&#41; &#61;&#62;  &#123;Jair.dev&#125;</h1>
            </div>
            <div ref={navRef} className="col-md-8 containerOptionsNav ">
                <ul className='optionsNav pink align-self-center '>
                    <li><a href="#projects" className='anchor'>Proyectos&#40;&#41;</a></li>
                    <li><a href="#skills" className='anchor'>Skills&#40;&#41;</a></li>
                    <li><a href="#" className='anchor'>Experiencia&#40;&#41;</a></li>
                    <li><a href="#contact" className='anchor'>Contacto&#40;&#41;</a></li>
                </ul>
            </div>
            <button className='check' onClick={showNavOpt}>

                <i className="bi bi-list anchor "></i> 
                
               
                {/* <label htmlFor="box"><i className="bi bi-list anchor "></i> </label>
                <input type="checkbox" id='box'/>
                */}
            </button>
            
        </div>

    </nav>
  )
}

export default NavBar