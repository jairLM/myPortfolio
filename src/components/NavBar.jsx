import React from 'react'
import '../styles/nav.css'


function NavBar() {
  return (
    <nav className="navContainer ">

        <div className="row-md-6  bandgeeOptions">
            <div className="col-md-4  containerBadge">
                <h1 className='badgee blue'>&#40;&#41; &#61;&#62;  &#123;Jair.dev&#125;</h1>
            </div>
            <div className="col-md-8 containerOptionsNav ">
                <ul className='optionsNav pink align-self-center '>
                    <li><a href="" className='anchor'>Portfolio&#40;&#41;</a></li>
                    <li><a href="#" className='anchor'>Skills&#40;&#41;</a></li>
                    <li><a href="#" className='anchor'>Experience&#40;&#41;</a></li>
                    <li><a href="#" className='anchor'>Contact&#40;&#41;</a></li>
                </ul>
            </div>
            <div className='check'>

                <label htmlFor="box"><i className="bi bi-list anchor "></i> </label>
                <input type="checkbox" id='box'/>
               
            </div>
            
        </div>

    </nav>
  )
}

export default NavBar