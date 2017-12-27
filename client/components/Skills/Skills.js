import React, { PureComponent } from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { Tweet } from 'react-twitter-widgets';


class Skills extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            hashtags: [],
            tweets: [],
            startDate: new Date(),
            endDate: new Date()
        };
    }

    componentDidMount() {
        // if a tweet comes through add it to state
        window.___SOCKET___.on('skill-tweet', (data) => {
            this.setState({
                startDate: data.countStartDate,
                endDate: data.countStartDate,
                hashtags: [ ...data.htCounts ],
                tweets: [ ...this.state.tweets, { hashtag: data.newestHT, tweet: data.newestTweet }]
            });
        });

        // ask server to send populate twitter data event to get latest
        // twitter data
        window.___SOCKET___.emit('send-twitter-data');

        window.___SOCKET___.on('populate-twitter-data', (data) => {
            console.log('populate-twitter-data', data);
            
            let newState = {
                startDate: data.countStartDate,
                endDate: data.countStartDate,
                hashtags: [ ...data.htCounts ]
            };

            if(data.newestHT && data.newestTweet) {
                newState.tweets = [
                    ...this.state.tweets, 
                    { 
                        hashtag: data.newestHT, 
                        tweet: data.newestTweet 
                    }
                ];
            }

            this.setState(newState);
        });
    }

    renderTweets() {
        return this.state.tweets.map((t, i) => {
            return <Tweet tweetId={ t.tweet } key={ i } />;
        });
    }

    render() {
        if(this.state.hashtags.length) {
            return (
                <div className='skills-container'>
                    <h2>Skills</h2>

                    <BarChart width={ 1500 }
                              className='pull-left'
                              height={ 600 }
                              data={ this.state.hashtags }
                              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey='ht' />
                        <YAxis dataKey='count' />
                        <CartesianGrid strokeDasharray='3 3' />
                        <Tooltip />
                        <Legend />

                        <Bar dataKey='count' fill='rgb(97, 218, 251)' />
                    </BarChart>

                    <div style={{ width: '20%' }} className='pull-right'>
                        { this.renderTweets() }
                    </div>
                </div>
            );
        } else {
            return <span></span>;
        }
    }

}

export default Skills;