import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import { Thumbnail, Button } from 'react-bootstrap';

class PortfolioRepeater extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderBagels() {
        let portfolio = [
            {
                title: 'Payment System',
                tech: 'AngularJS, LESS, Jade, NodeJS, ExpressJS, Stripe, PostgreSQL, Heroku, SalesForce',
                live: '',
                company: 'Zayo Group',
                github: '',
                img: '/images/portfolio/payment_system.png'
            },
            {
                title: 'Portfolio Project',
                tech: 'ReactJS, Redux, SCSS, NodeJS, ExpressJS, Webpack, Twitter API, Socket.io, MongoDB, Heroku',
                live: 'http://akyunaakish.com',
                company: 'Personal Project',
                github: 'https://github.com/AkyunaAkish/akyuna_akish',
                img: '/images/portfolio/portfolio_project.png'
            }, {
                title: 'Full Stack CRUD Application',
                github: 'https://github.com/AkyunaAkish/react-redux-blog-application',
                tech: 'ReactJS, Redux, SCSS, NodeJS, ExpressJS, Webpack, PostgreSQL, Heroku',
                live: 'https://writings-on-the-wall.herokuapp.com/',
                company: 'Personal Project',
                img: '/images/portfolio/writings_on_the_wall.png'
            }
        ];

        return portfolio.map((item, ind) => {
            return (
                <Thumbnail key={ ind } className='portfolio-item text-left' src={ item.img }>
                    <div>
                        <h3 style={{ marginTop: 0 }}>{ item.title }</h3>
                        <h4><i>{ item.company }</i></h4>
                        <h6 className='blue-text'><i>{ item.tech }</i></h6>
                    </div>

                    <div className='portfolio-item-btn-container'>
                        <RaisedButton className='portfolio-item-btn'
                                      label={ 'Live Site' }
                                      label={ item.live.length ? 'Live Site' : 'Privately Hosted' }
                                      disabled={ item.live.length ? false : true }
                                      href={ item.live }
                                      disabledBackgroundColor={ 'rgb(149,149,149)' }
                                      disabledLabelColor={ 'rgb(255,255,255)' }
                                      backgroundColor={ 'rgb(52, 56, 64)' }
                                      labelColor={ 'rgb(255,255,255)' }
                                      icon={ <i className='fa fa-cloud'></i> }
                                      style={{ hover: { cursor: item.live.length ? 'pointer' : 'not-allowed' } }}
                                      target='_blank' />
                        <RaisedButton className='portfolio-item-btn'
                                      label={ item.github.length ? 'Github Repo' : 'Private Repo' }
                                      disabled={ item.github.length ? false : true }
                                      href={ item.github }
                                      disabledBackgroundColor={ 'rgb(149,149,149)' }
                                      disabledLabelColor={ 'rgb(255,255,255)' }
                                      backgroundColor={ 'rgb(52, 56, 64)' }
                                      labelColor={ 'rgb(255,255,255)' }
                                      icon={ <i className='fa fa-github-square'></i> }
                                      target='_blank' />
                    </div>
                </Thumbnail>
            );
        });
    }

    render() {
        return (
            <div className='portfolio-repeater-container margin-center'>
                <h3 className='text-center'>Projects</h3>
                { this.renderBagels() }
            </div>
        );
    }
}

export default PortfolioRepeater;