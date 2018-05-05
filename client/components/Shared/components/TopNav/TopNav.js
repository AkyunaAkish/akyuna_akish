import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { Tabs, Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import PortfolioIcon from 'material-ui/svg-icons/action/important-devices';
import ResumeIcon from 'material-ui/svg-icons/content/content-paste';
import ContactIcon from 'material-ui/svg-icons/communication/chat-bubble-outline';
import Snackbar from 'material-ui/Snackbar';

import toggleSnackbar from '../../actions/toggleSnackbar';
import toggleSideNav from '../../actions/toggleSideNav';

import AppBar from 'material-ui/AppBar';

class TopNav extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0
        };
    }

    updateCurrentTab() {
        switch (this.props.history.location.pathname) {
            case '/':
                this.setState({
                    currentTab: 0
                });
                break;

            case '/contact':
                this.setState({
                    currentTab: 1
                });
                break;
        }
    }
    
    componentDidMount() {
        this.updateCurrentTab();

        this.props.history.listen(() => {
            this.updateCurrentTab();
        });
    }

    handleChange(tab) {
        switch (tab) {
            case 0:
                this.props.history.push('/');
            break;

            case 1:
                this.props.history.push('/contact');
            break;

            case 2:
                const el = document.createElement('a');

                el.setAttribute('href', '/documents/Akyuna_Akish_Resume.pdf');
                el.setAttribute('target', '_blank');
                el.click();

                this.props.toggleSideNav(false);
            break;
        }
        
        if(tab !== 2) {
            this.setState({
                currentTab: tab 
            });
        }
    }

    render() {
        const tabStyle = {
            height: 65,
            minWidth: 130
        };

        return (
            <div className='top-nav-container'>
                <AppBar iconElementLeft={ this.props.windowWidth < 585 ? <IconButton><MenuIcon /></IconButton> : <span></span> }
                        onLeftIconButtonTouchTap={ () => this.props.toggleSideNav() }
                        title={ <div className='top-nav-title'><Link to='/'><img src='/images/akyunatransparent.png' /></Link></div> }
                        children={ this.props.windowWidth < 585 ? [] : [
                            <Tabs key='1' 
                                  className='top-nav-tabs' 
                                  value={ this.state.currentTab } 
                                  onChange={ this.handleChange.bind(this) }
                                  inkBarStyle={{ color: 'rgb(97, 218, 251)', backgroundColor: 'rgb(97, 218, 251)' }}>
                                
                                <Tab label='Portfolio' icon={ <PortfolioIcon /> } value={ 0 } style={ tabStyle } />
                                <Tab label='Contact' icon={ <ContactIcon /> } value={ 1 } style={ tabStyle } />
                                <Tab label='Resumé' icon={ <ResumeIcon /> } value={ 2 } style={ tabStyle } />
                            </Tabs>   
                        ]} />

                <Snackbar open={ this.props.snackBarOpen }
                          message={ this.props.snackBarMessage }
                          bodyStyle={{ background: 'rgb(33, 35, 43)' }}
                          autoHideDuration={ 4000 }
                          onRequestClose={ () => this.props.toggleSnackbar(false, '') }/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        windowWidth: state.dimensions.width,
        snackBarMessage: state.topNav.snackBarMessage,
        snackBarOpen: state.topNav.snackBarOpen
    };
}

export default withRouter(connect(mapStateToProps, { toggleSideNav, toggleSnackbar })(TopNav));