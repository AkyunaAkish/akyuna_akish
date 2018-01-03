import React, { PureComponent } from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import toggleSnackbar from '../Shared/actions/toggleSnackbar';

import axios from 'axios';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SendIcon from 'material-ui/svg-icons/communication/email';

class Contact extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $('input#yourName').focus();
    }

    renderField(field) {
        const { meta: { touched, error }, multi, id } = field;
        
        const fieldStyle = {
            errorStyle: {
                color: 'rgb(217, 83, 79)',
            },
            underlineStyle: {
                borderColor: 'rgb(119, 136, 153)',
            },
            floatingLabelStyle: {
                color: 'rgb(119, 136, 153)',
            },
            floatingLabelFocusStyle: {
                color: 'rgb(119, 136, 153)',
            }
        };

        return (
            <div style={{ paddingLeft: 12 }}>
                <TextField style={{ width: '100%' }}
                           id={ id }
                           className='form-input'
                           floatingLabelStyle={{ color: touched && error ? fieldStyle.errorStyle.color : 'rgb(97, 218, 251)' }}
                           inputStyle={{ color: touched && error ? fieldStyle.errorStyle.color : 'rgb(255,255,255)' }}
                           textareaStyle={{ color: touched && error ? fieldStyle.errorStyle.color : 'rgb(255,255,255)' }}
                           hintStyle={{ color: touched && error ? fieldStyle.errorStyle.color : 'rgb(255,255,255)' }}
                           hintText={ field.label }
                           floatingLabelText={ field.label }
                           multiLine={ multi ? true : false }
                           underlineFocusStyle={{ borderColor: 'rgb(97, 218, 251)' }}
                           errorText={ touched ? error : null }
                           errorStyle={ fieldStyle.errorStyle }
                           { ...field.input } />
            </div>
        );
    }

    onSubmit({ senderEmail, text }) {
        axios.post('/api/contact/', { senderEmail, text })
             .then((emailRes) => {                 
                 if(emailRes.data.success) {
                     this.props.toggleSnackbar(true, 'Message Sent Successfully');
                     this.props.history.push('/');
                 } else {
                     this.props.toggleSnackbar(true, 'Message Failed to be Sent');
                 }
             })
             .catch((emailErr) => {
                 this.props.toggleSnackbar(true, 'Message Failed to be Sent');
             });
    }

    render() {
        const { handleSubmit } = this.props;

        const paperStyle = {
            width: this.props.windowWidth < 390 ? '95%' : '55%',
            maxWidth: 1000,
            padding: 20,
            margin: this.props.windowWidth < 390 ? '50px 0 0 0' : 50,
            display: 'inline-block',
            background: 'rgb(33, 35, 43)',
            textAlign: 'left'
        };

        return(
            <div className='contact-container text-center'> 
                <Paper style={ paperStyle } zDepth={ 5 }>
                    <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                        <Field id='yourName' name='yourName' label='Your Full Name' component={ this.renderField } />
                        <Field id='senderEmail' name='senderEmail' label='Your Email Address' component={ this.renderField } />
                        <Field id='text' name='text' label='Message' multi={ true } component={ this.renderField } />

                        <RaisedButton icon={ <SendIcon /> }
                                      type='submit'
                                      label='Send'
                                      backgroundColor='rgb(97, 218, 251)'
                                      labelColor='rgb(255, 255, 255)'
                                      disabled={ this.props.valid ? false : true }
                                      disabledBackgroundColor='rgb(52, 56, 64)'
                                      style={{ margin: 12 }} />
                    </form>
                </Paper> 
            </div>
        );
    }

}

function validate(values) {
    const errors = {};
    const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.yourName) {
        errors.yourName = 'Please enter your full name';
    }

    if (!values.senderEmail) {
        errors.senderEmail = 'Please enter your email address';
    }
 
    if (!errors.senderEmail && !emailRegexp.test(values.senderEmail)) {
        errors.senderEmail = 'Please a valid email address';
    }

    if (!values.text) {
        errors.text = 'Please enter your message';
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        windowWidth: state.dimensions.width
    };
}

export default reduxForm({
    validate,
    form: 'ContactForm'
})(connect(mapStateToProps, { toggleSnackbar })(withRouter(Contact)));