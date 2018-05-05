import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class Hero extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        $('#hero-container').width(this.props.windowWidth - 50);
        $('#hero-part').width(this.props.windowWidth - 50);

        setTimeout(() => {
            $('#hero-container').width(this.props.windowWidth - 50);
            $('#hero-part').width(this.props.windowWidth - 50);
        }, 300);

        return(
            <div className='hero-container' id='hero-container'>
                <div className='part' id='hero-part'>
                    <div className='octo'>
                        <div className='octo1'>
                            <img src='/images/hooded_profile_image.jpg' width='320' height='316' />
                        </div>
                    </div>

                    <div className='hero-details-left'>
                        <h3>Full Stack Web Developer</h3>
                        <p>Boulder, CO</p>
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

function mapStateToProps(state) {
    return {
        windowWidth: state.dimensions.width,
        sideNavOpen: state.sideNav.sideNavOpen
    };
}

export default connect(mapStateToProps)(Hero);