import React, { PureComponent } from 'react';

class Hero extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='hero-container'>
                <h1>Hero image</h1>
            </div>
        );
    }

}

export default Hero;