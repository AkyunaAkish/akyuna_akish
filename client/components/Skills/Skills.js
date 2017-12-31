import React, { PureComponent } from 'react';

import ReactHighcharts from 'react-highcharts'

import { Tweet } from 'react-twitter-widgets';

class Skills extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            tweets: [],
            currentHT: '',
            showCurrentHT: false,
            highChartsConfig: {
                chart: {
                    type: 'bar',
                    backgroundColor: 'transparent',
                    height: 380
                },
                title: {
                    text: 'Real-Time Twitter Mentions of my Skills',
                    style: { color: 'white' }
                },
                plotOptions: {
                    column: {
                        depth: 25
                    }
                },
                xAxis: {
                    categories: [],
                    labels: {
                        style: {
                            fontSize: '11px',
                            color: 'white'
                        }
                    }
                },
                yAxis: {
                    title: {
                        text: null,
                    },
                    labels: {
                        style: {
                            fontSize: '11px',
                            color: 'white'
                        }
                    }
                },
                legend: {
                    enabled: false
                },
                series: [{
                    name: 'Mentions',
                    itemStyle: {
                        color: 'white'
                    },
                    data: [],
                    color: 'rgb(97, 218, 251)'
                }]
            }
        };
    }

    componentDidMount() {
        // workaround for socket event callback unmounted component setState issue
        this.mounted = true;

        // if a tweet comes through add it to state
        window.___SOCKET___.on('skill-tweet', (data) => {
            console.log('Data 1', data);
            
            let highchartConfigClone = { ...this.state.highChartsConfig };
            highchartConfigClone.xAxis.categories = data.htCounts.categories;
            highchartConfigClone.series[0].data = data.htCounts.data;
            
            let indOfDateBeginning = highchartConfigClone.title.text.indexOf('(');
            let mainTitleText = indOfDateBeginning > 0 ? highchartConfigClone.title.text.slice(0, indOfDateBeginning)
                                                       : highchartConfigClone.title.text;

            highchartConfigClone.title.text = mainTitleText + `(${data.startDate} - ${data.endDate})`;


            if(this.mounted) {
                this.setState({
                    highchartConfig: highchartConfigClone,
                    tweets: data.tweets || [],
                    currentHT: data.currentHT,
                    showCurrentHT: true
                });

                let chart = this.refs.chart.getChart();
                chart.redraw();

                $('.chart-container').css({
                   'background': 'rgba(97, 218, 251, .3)'
                });

                setTimeout(() => {
                    $('.chart-container').css({ 
                        'background': 'transparent'
                    });

                    this.setState({
                        showCurrentHT: false
                    });
                }, 1500);
            }
        });

        // ask server to send populate twitter data event to get latest
        // twitter data
        window.___SOCKET___.emit('send-twitter-data');

        window.___SOCKET___.on('populate-twitter-data', (data) => {
            console.log('Data2', data);

            let highchartConfigClone = { ...this.state.highChartsConfig };
            highchartConfigClone.xAxis.categories = data.htCounts.categories;
            highchartConfigClone.series[0].data = data.htCounts.data;

            let indOfDateBeginning = highchartConfigClone.title.text.indexOf('(') + 1;
            let mainTitleText = indOfDateBeginning > 0 ? highchartConfigClone.title.text.slice(0, indOfDateBeginning) 
                                                       : highchartConfigClone.title.text;

            highchartConfigClone.title.text = mainTitleText + `\n(${data.startDate} - ${data.endDate})`;
            

            let newState = {
                highchartConfig: highchartConfigClone,
                tweet: data.tweets || []
            };

            if (this.mounted) {
                this.setState(newState);

                let chart = this.refs.chart.getChart();
                chart.redraw();

                $('.chart-container').css({ 
                   'background': 'rgba(97, 218, 251, .3)'
                });

                setTimeout(() => {
                    $('.chart-container').css({ 
                        'background': 'transparent' 
                    });
                }, 750);
            }            
        });
    }

    componentWillUnmount() {
        // workaround for socket event callback unmounted component setState issue
        this.mounted = false;
    }

    renderTweets() {
        // if (this.state.tweets.length && this.state.tweets.length < 6) {
        //     return this.state.tweets.map((t, i) => {
        //         return <Tweet tweetId={ t.tweet_id } key={ i } />;
        //     });
        // } else {
           return <span></span>;
        // } 
    }

    render() {
        return (
            <div className='skills-container'>
                <div className='chart-container'>
                    <div style={{
                                 opacity: this.state.showCurrentHT ? 1 : 0
                            }} 
                            className='current-ht'>
                        { this.state.currentHT }
                    </div>
                    <ReactHighcharts config={ this.state.highChartsConfig }
                                     ref='chart' />
                </div>
                                
                <div style={{ width: '20%' }} className='pull-right'>
                    { this.renderTweets() }
                </div>
           
            </div>
        );
    }

}
export default Skills;
