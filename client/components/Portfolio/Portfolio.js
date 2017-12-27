import React, { PureComponent } from 'react';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';

class Portfolio extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='portfolio-container'>
               <Hero />
               <Skills />
            </div>
        );
    }

}

export default Portfolio;