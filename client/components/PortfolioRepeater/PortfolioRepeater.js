import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import { Thumbnail, Button } from 'react-bootstrap';

class PortfolioRepeater extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderPortfolio() {
        let portfolio = [
            {
                title: 'Kaiser Permanente Admin Managed Website(ABI U)',
                tech: 'ReactJS, Redux, SCSS, MaterialUI, NodeJS, ExpressJS, Webpack, PostgreSQL, KnexJS, Cypress, Unix, Windows, Heroku',
                live: '',
                company: 'Betsol',
                github: '',
                img: '/images/abi_u.png'
            },
            {
                title: 'Kaiser Permanente Automation Setup Tool(LeTo)',
                tech: 'ReactJS, Redux, SCSS, MaterialUI, NodeJS, ExpressJS, Socket.io, Webpack, PostgreSQL, KnexJS, Docker, Unix, Linux',
                live: '',
                company: 'Betsol',
                github: '',
                img: '/images/portfolio/leto_dash.png'
            },    
            {
                title: 'Kaiser Permanente Test Automation Tool(APDP)',
                tech: 'ReactJS, Redux, SCSS, MaterialUI, NodeJS, ExpressJS, Socket.io, Webpack, PostgreSQL, KnexJS, Docker, Unix, Linux',
                live: '',
                company: 'Betsol',
                github: '',
                img: '/images/portfolio/apdp.png'
            },    
            {
                title: 'Payment System',
                tech: 'AngularJS, LESS, Jade, AngularStrap, WebpackJS, GulpJS, Webpack, NodeJS, ExpressJS, Stripe, PostgreSQL, Heroku, SalesForce',
                live: 'https://tranzact.zayo.com/#!/',
                company: 'Zayo Group',
                github: '',
                img: '/images/portfolio/payment_system.png'
            },   
            {
                title: 'GitHub User Search Project',
                tech: 'ReactJS, Redux, Redux-Observable, RxJS, SCSS, Material-UI, NodeJS, Webpack, GitHub API, GitHub Pages',
                live: 'https://akyunaakish.github.io/react-redux-observable-github-search/',
                company: 'Personal Project',
                github: 'https://github.com/AkyunaAkish/react-redux-observable-github-search',
                img: '/images/github_search_project.png'
            },
            {
                title: 'Portfolio Project',
                tech: 'ReactJS, Redux, SCSS, Material-UI, NodeJS, ExpressJS, Webpack, Twitter API, Mailgun-js, Socket.io, MongoDB, Mongoose, Heroku',
                live: 'http://akyuna.com',
                company: 'Personal Project',
                github: 'https://github.com/AkyunaAkish/akyuna_akish',
                img: '/images/portfolio_project.png'
            },
        ];

        return portfolio.map((item, ind) => {
            return (
                <Thumbnail key={ ind } className='portfolio-item text-left' src={ item.img }>
                    <div>
                        <h3 style={{ marginTop: 0 }}>{ item.title }</h3>
                        <h4><i>{ item.company }</i></h4>
                        <h6 className='blue-text'><i>{ item.tech }</i></h6>
                    </div>

                    <div className='fixed-bottom-container'>
                         <div className='portfolio-item-btn-container'>
                             <RaisedButton className='portfolio-item-btn'
                                           label={ item.live.length ? 'Live Site' : this.props.windowWidth < 390 ? 'Private' : 'Privately Hosted' }
                                           disabled={ item.live.length && item.live !== 'http://akyuna.com' ? false : true }
                                           href={ item.live }
                                           disabledBackgroundColor={ 'rgb(149,149,149)' }
                                           disabledLabelColor={ 'rgb(255,255,255)' }
                                           backgroundColor={ 'rgb(52, 56, 64)' }
                                           labelColor={ 'rgb(255,255,255)' }
                                           icon={ <i className='fa fa-cloud'></i> }
                                           target='_blank' />

                             <RaisedButton className='portfolio-item-btn'
                                           label={ item.github.length ? 'Github Repo' : this.props.windowWidth < 390 ? 'Private' : 'Private Repo' }
                                           disabled={ item.github.length ? false : true }
                                           href={ item.github }
                                           disabledBackgroundColor={ 'rgb(149,149,149)' }
                                           disabledLabelColor={ 'rgb(255,255,255)' }
                                           backgroundColor={ 'rgb(52, 56, 64)' }
                                           labelColor={ 'rgb(255,255,255)' }
                                           icon={ <i className='fa fa-github-square'></i> }
                                           target='_blank' />
                         </div>
                    </div>
                </Thumbnail>
            );
        });
    }

    render() {
        return (
            <div className='portfolio-repeater-container margin-center'>
                <h3 className='text-center'>Projects</h3>
                { this.renderPortfolio() }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        windowWidth: state.dimensions.width
    };
}

export default connect(mapStateToProps)(PortfolioRepeater);