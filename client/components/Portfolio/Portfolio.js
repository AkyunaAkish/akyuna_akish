import React, { PureComponent } from 'react';
import Hero from '../Hero/Hero';

class Portfolio extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='portfolio-container'>
               <Hero />
            </div>
        );
    }

}

export default Portfolio;