import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// setup for font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

const Footer = (props)=>{
        return (
            <footer>
               <div className="footer-div">
               <span>Find me on </span>
                <a href="https://github.com/khaliqzohaib92">
                    <FontAwesomeIcon icon={['fab', 'github']} size='lg' className='github'/>
                </a>
                <a href="https://www.linkedin.com/in/zohaibkhaliq/">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size='lg' />
                </a>
               </div>
            </footer>
        );
}

export default Footer;