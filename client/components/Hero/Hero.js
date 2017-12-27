import React, { PureComponent } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const styles = {
    uploadButton: {
        verticalAlign: 'middle',
    },
    uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    },
};

class Hero extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='hero-container'>
                <div className='part'>
                    <div className='octo'>
                        <div className='octo1'>
                            <img src='/images/hooded_profile_image.jpg' width='320' height='316' />
                        </div>
                    </div>

                    <div className='hero-details-left'>
                        <h3>Full Stack Web Developer</h3>
                        <p>Mountain View, CA</p>
                    </div>

                    <div className='hero-details-right'>
                        <FlatButton href='https://github.com/AkyunaAkish'
                                    target='_blank'
                                    className='block'
                                    label='GitHub'
                                    secondary={ true }
                                    icon={ <i className='fa fa-github-square'></i> } />

                        <FlatButton href='https://www.linkedin.com/in/akyunaakish'
                                    target='_blank'
                                    className='block'
                                    label='Linked In'
                                    secondary={ true } 
                                    icon={ <i className='fa fa-linkedin-square'></i> } />

                        <FlatButton href='tel:7605856334'
                                    className='block'
                                    label='760-585-6334'
                                    secondary={ true }
                                    icon={ <i className='fa fa-mobile'></i> } />

                        <FlatButton href='mailto:akyunaakish@gmail.com'
                                    className='block'
                                    label='akyunaakish@gmail.com'
                                    secondary={ true }
                                    icon={ <i className='fa fa-envelope'></i> } />
                    </div>
            
                </div>

                <div className='fade_line'></div>
            </div>
        );
    }

}

export default Hero;