import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import toggleSideNav from '../../actions/toggleSideNav';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import CloseIcon from 'material-ui/svg-icons/navigation/close';
import PortfolioIcon from 'material-ui/svg-icons/action/important-devices';
import ResumeIcon from 'material-ui/svg-icons/content/content-paste';
import ContactIcon from 'material-ui/svg-icons/communication/chat-bubble-outline';

class SideNav extends PureComponent {
    constructor(props) {
        super(props);
    }

    handleClick(e, val) {
        switch (val) {
            case 0:
                this.props.history.push('/');
                this.props.toggleSideNav(false);
                return;
            case 1:
                this.props.history.push('/contact');
                this.props.toggleSideNav(false);
                return;
            case 2:
                const el = document.createElement('a');
                el.setAttribute('href', '/documents/Akyuna_Akish_Resume.pdf');
                el.setAttribute('target', '_blank');
                el.click();

                this.props.toggleSideNav(false);
                return;
        }
    }

    render() {
        return (
            <Drawer className='side-nav-container'
                    docked={ false }
                    width={ $(window).width() }
                    open={ this.props.sideNavOpen }
                    onRequestChange={ () => this.props.toggleSideNav() }>
                <Menu className='side-nav-menu' style={{ padding: 0, margin: 0, width: $(window).width() }} onChange={ this.handleClick.bind(this) }>
                    <Divider style={{ marginTop: 0 }} />

                    <MenuItem primaryText='Close' 
                              className='menu-item'
                              onClick={ () => this.props.toggleSideNav() }
                              leftIcon={ <CloseIcon style={{ fill: 'rgb(255,255,255)' }} /> } />

                    <Divider />

                    <MenuItem primaryText='Portfolio'
                              value={ 0 }
                              className={ 'menu-item' }
                              leftIcon={ <PortfolioIcon style={{ fill: 'rgb(255,255,255)' }} /> } />

                    <Divider />          
                   
                    <MenuItem primaryText='Contact'
                              value={ 1 }
                              className={ 'menu-item' }
                              leftIcon={ <ContactIcon style={{ fill: 'rgb(255,255,255)' }} /> } />

                    <Divider />

                     <MenuItem primaryText='Resumé'
                              value={ 2 }
                              className={ 'menu-item' }
                              leftIcon={ <ResumeIcon style={{ fill: 'rgb(255,255,255)' }} /> } />

                    <Divider />
                          
                </Menu>
            </Drawer>
        );
    }
}

function mapStateToProps(state) {
    return {
        sideNavOpen: state.sideNav.sideNavOpen
    };
}

export default withRouter(connect(mapStateToProps, { toggleSideNav })(SideNav));