import React, { PureComponent } from 'react';
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import PortfolioRepeater from '../PortfolioRepeater/PortfolioRepeater';

class Portfolio extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='portfolio-container'>
               <Hero />
               <Skills />
               <PortfolioRepeater />
            </div>
        );
    }

}

export default Portfolio;